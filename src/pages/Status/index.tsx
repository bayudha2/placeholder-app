import React from 'react';
import { useLocation } from 'react-router-dom';

import Modal from 'src/components/Modal';
import { PostList } from 'src/features/post';
import { useGetUserQuery } from 'src/features/user';
import { toggleModal } from 'src/helper/helperSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';

const Status = () => {
  const location = useLocation();
  const state = location.state as { id: string };
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.helper.openModal);

  const { isSuccess, data } = useGetUserQuery(state?.id ? state.id : 1);

  function handleOpenModal(): void {
    dispatch(toggleModal({ data: {}, type: 'createPost' }));
  }

  return (
    <>
      <section className="mt-10">
        <div className="mt-10">
          <small className="text-gray-600">List of Post</small>
          <h1 className="mb-4 mt-3 text-lg ">
            Here is list of available Post from {isSuccess ? data.name : 'User'}
          </h1>
        </div>
        <button
          onClick={handleOpenModal}
          type="button"
          className="py-1 text-sm text-cyan-50 mb-4 px-2 rounded-md bg-main-30">
          Create post
        </button>
        <PostList id={state?.id ? state.id : 1} />
      </section>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Status;
