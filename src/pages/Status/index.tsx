import React from 'react';
import { useLocation } from 'react-router-dom';

import { PostList } from 'src/features/post';

const Status = () => {
  const location = useLocation();

  return (
    <>
      <section className="mt-10">
        <div className="mt-10">
          <small className="text-gray-600">List of Post</small>
          <h1 className="mb-4 mt-3 text-lg ">Here is list of available Post from this_user</h1>
        </div>
        <PostList id={location.state ? location.state : 1} />
      </section>
    </>
  );
};

export default Status;
