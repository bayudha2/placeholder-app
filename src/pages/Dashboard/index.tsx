import React from 'react';

import { UserList } from 'src/features/user';

function Dashboard() {
  return (
    <section>
      <div className="text-9xl">Dashboard</div>
      <UserList />
    </section>
  );
}

export default Dashboard;
