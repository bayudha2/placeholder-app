import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetPostsQuery } from '../../services/postExtend';
import CardPost from 'src/components/cards/CardPost';

const PostList = ({ id }: { id: string | number | unknown }) => {
  const { isLoading, isSuccess, isError, data } = useGetPostsQuery(id);
  const skeleton = [...Array(10)];

  return (
    <div className="flex flex-col justify-center gap-4 overflow-hidden">
      {isLoading && skeleton.map((_, i) => <Skeleton key={i} height={100} width={300} />)}
      {isSuccess && data.map((data, idx) => <CardPost {...data} key={data.id} />)}
      {isError && <h1 className="font-bold text-6xl">Oops something went wrong…</h1>}
    </div>
  );
};

export default PostList;
