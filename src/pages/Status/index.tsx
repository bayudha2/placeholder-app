import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import Modal from 'src/components/Modal';
import { PostList } from 'src/features/post';
import { useGetUserQuery, useGetUsersQuery } from 'src/features/user';
import { toggleModal } from 'src/helper/helperSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';

const Status = () => {
  const location = useLocation();
  const state = location.state as { id: string };

  const userRef = useRef<HTMLSelectElement>();
  const [userId, setUserId] = useState<number | string>(state?.id ? state.id : 1);

  useEffect(() => {
    setUserId(state?.id ? state.id : 1);
    console.log('userId', userId);
  }, []);

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.helper.openModal);

  const { data: usersData, isLoading, isError } = useGetUsersQuery();
  const { isSuccess, data } = useGetUserQuery(userId);

  function handleOpenModal(): void {
    dispatch(toggleModal({ data: {}, type: 'createPost' }));
  }

  function handleUserChange() {
    setUserId(userRef.current.value);
  }

  return (
    <>
      <section className="mt-10">
        <div>
          <label htmlFor="user" className="relative">
            <select
              ref={userRef}
              onChange={handleUserChange}
              name="user"
              id="user"
              defaultValue={userId}
              className="select-user-input">
              {isLoading || (isError && <option value="1">User</option>)}
              {usersData &&
                usersData.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <ChevronDownIcon className="h-4 w-4 absolute pointer-events-none z-10 top-0 right-5 text-gray-700" />
          </label>
        </div>
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
        <PostList id={userId} />
      </section>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Status;
