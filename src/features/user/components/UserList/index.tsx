import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useGetUsersQuery } from 'src/features/user';
import CardUser from 'src/components/cards/CardUser';

const UserList = () => {
  const { isLoading, isSuccess, data, isError } = useGetUsersQuery();
  const skeleton = [...Array(10)];

  return (
    <div className="flex gap-4 justify-center flex-wrap mt-8">
      {isLoading && skeleton.map((_, idx) => <Skeleton key={idx} height={200} width={400} />)}
      {isSuccess && data.map((data) => <CardUser key={data.id} {...data} />)}
      {isError && <h1 className="font-bold text-6xl">Oops something went wrong…</h1>}
    </div>
  );
};

export default UserList;
