import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useDeleteCommentMutation, useGetCommentsQuery } from '../../services/commentExtend';
import CardComment from 'src/components/cards/CardComment';
import { useAppSelector } from 'src/hooks/reduxHooks';
import showToast from 'src/utils/useToast';

const CommentList = () => {
  const postData = useAppSelector((state) => state.helper.forComment);
  const userChanging = useAppSelector((state) => state.helper.userChanging);
  const [skip, setSkip] = useState<boolean>(true);
  const [postId, setPostId] = useState<number>();

  useEffect(() => {
    if (!postData) return;
    setSkip(false);
    setPostId(postData.id);
  }, [postData]);

  useEffect(() => {
    setPostId(0);
  }, [userChanging]);

  const { isLoading, isError, isFetching, isSuccess, data } = useGetCommentsQuery(postId, {
    skip: skip
  });
  const [deleteComment, { isSuccess: deleteSuccess, isLoading: deleteLoading }] =
    useDeleteCommentMutation();

  useEffect(() => {
    deleteSuccess && showToast('Success delete comment!', 'success');
  }, [deleteSuccess]);

  let comments: any;
  if (isLoading || isFetching) {
    comments = [...Array(5)].map((_, i) => <Skeleton key={i} height={200} width={300} />);
  } else if (isSuccess) {
    comments = data.map((data) => (
      <CardComment
        key={data.id}
        deleteComment={deleteComment}
        isLoading={deleteLoading}
        dataComment={data}
      />
    ));
  } else if (isError) {
    comments = <h1 className="font-bold text-2xl">Oops something went wrong…</h1>;
  }

  return <div className="flex flex-col gap-4 overflow-hidden">{comments}</div>;
};

export default CommentList;
