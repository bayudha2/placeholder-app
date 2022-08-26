import React from 'react';

import { UserList } from 'src/features/user';

function Dashboard() {
  return (
    <section>
      <div className="mt-10">
        <small className="text-gray-600">List of user</small>
        <h1 className="mb-4 mt-3 text-lg ">Here is list of available users</h1>
      </div>
      <UserList />
    </section>
  );
}

export default Dashboard;
