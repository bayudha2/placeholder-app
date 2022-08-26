import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetPostsQuery } from '../../services/postExtend';
import CardPost from 'src/components/cards/CardPost';

const PostList = ({ id }: { id: string | number | unknown }) => {
  const { isLoading, isSuccess, isError, isFetching, data } = useGetPostsQuery(id);
  const skeleton = [...Array(10)];

  let posts: React.ReactNode;
  if (isLoading || isFetching) {
    posts = skeleton.map((_, i) => <Skeleton key={i} height={100} width={300} />);
  } else if (isSuccess) {
    posts = data.map((data) => <CardPost {...data} key={data.id} />);
  } else if (isError) {
    posts = <h1 className="font-bold text-6xl">Oops something went wrong…</h1>;
  }

  return <div className="flex flex-col justify-center gap-4 overflow-hidden">{posts}</div>;
};

export default PostList;
