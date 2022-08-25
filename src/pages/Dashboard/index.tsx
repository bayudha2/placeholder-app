import React from 'react';

function Dashboard() {
  return (
    <>
      <div className="text-9xl">Dashboard</div>
      {process.env.REACT_APP_BASE_URL}
    </>
  );
}

export default Dashboard;
