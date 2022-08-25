import React from 'react';

import { useGetUsersQuery } from 'src/features/user';

const UserList = () => {
  const { isLoading, isSuccess, data, isError, error } = useGetUsersQuery();
  return <div>UserList</div>;
};

export default UserList;
