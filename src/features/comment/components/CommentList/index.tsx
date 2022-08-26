import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetCommentsQuery } from '../../services/commentExtend';
import CardComment from 'src/components/cards/CardComment';
import { useAppSelector } from 'src/hooks/reduxHooks';

const CommentList = () => {
  const postData = useAppSelector((state) => state.helper.forComment);
  const userChaning = useAppSelector((state) => state.helper.userChanging);
  const [skip, setSkip] = useState<boolean>(true);
  const [postId, setPostId] = useState<number>();

  useEffect(() => {
    if (!postData) return;
    setSkip(false);
    setPostId(postData.id);
  }, [postData]);

  useEffect(() => {
    setPostId(0);
  }, [userChaning]);

  const { isLoading, isError, isFetching, isSuccess, data } = useGetCommentsQuery(postId, {
    skip: skip
  });

  const skeleton = [...Array(5)];

  let comments: any;
  if (isLoading || isFetching) {
    comments = skeleton.map((_, i) => <Skeleton key={i} height={200} width={300} />);
  } else if (isSuccess) {
    comments = data.map((data) => <CardComment key={data.id} {...data} />);
  } else if (isError) {
    comments = <h1 className="font-bold text-2xl">Oops something went wrong…</h1>;
  }

  return <div className="flex flex-col gap-4 overflow-hidden">{comments}</div>;
};

export default CommentList;
