import React from 'react';
import { useLocation } from 'react-router-dom';

import Modal from 'src/components/Modal';
import { PostList } from 'src/features/post';
import { useAppSelector } from 'src/hooks/reduxHooks';

const Status = () => {
  const location = useLocation();
  const isModalOpen = useAppSelector((state) => state.helper.openModal);

  return (
    <>
      <section className="mt-10">
        <div className="mt-10">
          <small className="text-gray-600">List of Post</small>
          <h1 className="mb-4 mt-3 text-lg ">Here is list of available Post from this_user</h1>
        </div>
        <PostList id={location.state ? location.state : 1} />
      </section>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Status;
