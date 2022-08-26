import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useDeletePostMutation, useGetPostsQuery } from '../../services/postExtend';
import CardPost from 'src/components/cards/CardPost';
import showToast from 'src/utils/useToast';

const PostList = ({ id }: { id: string | number | unknown }) => {
  const { isLoading, isSuccess, isError, isFetching, data } = useGetPostsQuery(id);
  const [deletePost, { isLoading: deleteLoading, isSuccess: deleteSuccess }] =
    useDeletePostMutation();
  const skeleton = [...Array(10)];

  useEffect(() => {
    if (deleteSuccess) {
      showToast('Success delete post!', 'success');
    }
  }, [deleteSuccess]);

  let posts: React.ReactNode;
  if (isLoading || isFetching) {
    posts = skeleton.map((_, i) => <Skeleton key={i} height={100} width={300} />);
  } else if (isSuccess) {
    posts = data.map((data) => (
      <CardPost isLoading={deleteLoading} deletePost={deletePost} dataPost={data} key={data.id} />
    ));
  } else if (isError) {
    posts = <h1 className="font-bold text-6xl">Oops something went wrong…</h1>;
  }

  return <div className="flex flex-col justify-center gap-4 overflow-hidden">{posts}</div>;
};

export default PostList;
