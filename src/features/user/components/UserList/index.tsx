import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetUsersQuery } from 'src/features/user';
import CardUser from 'src/components/cards/CardUser';

const UserList = () => {
  const { isLoading, isSuccess, data, isError } = useGetUsersQuery();
  const skeleton = [...Array(10)];

  return (
    <div className="flex gap-4 justify-center flex-wrap mt-8">
      {isLoading && skeleton.map((i) => <Skeleton key={i} height={200} width={400} />)}
      {isSuccess && data.map((data, i) => <CardUser key={i} {...data} />)}
      {isError && <h1 className="font-bold text-6xl">Oops something went wrong…</h1>}
    </div>
  );
};

export default UserList;
