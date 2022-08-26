import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetCommentsQuery } from '../../services/commentExtend';
import CardComment from 'src/components/cards/CardComment';

const CommentList = () => {
  const { isLoading, isError, isSuccess, isFetching, data } = useGetCommentsQuery(1);
  const skeleton = [...Array(5)];

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {isLoading ||
        (isFetching && skeleton.map((_, i) => <Skeleton key={i} height={200} width={300} />))}
      {isSuccess && data.map((data) => <CardComment key={data.id} {...data} />)}
      {isError && <h1 className="font-bold text-2xl">Oops something went wrong…</h1>}
    </div>
  );
};

export default CommentList;
