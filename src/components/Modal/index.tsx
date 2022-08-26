import React from 'react';

import { FormPost } from 'src/features/post';
import { FormComment } from 'src/features/comment';

import { useAppSelector } from 'src/hooks/reduxHooks';

const Modal = () => {
  const { modalType } = useAppSelector((state) => state.helper);

  return (
    <div
      className="fixed top-0 left-0 z-10 h-screen w-screen "
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="absolute top-1/2 left-1/2 z-20 h-auto w-[34%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white">
        <div className="flex items-center p-4">
          <h1 className="px-4 text-2xl font-bold">{modalType} Post</h1>
        </div>
        {(modalType === 'createPost' && <FormPost />) ||
          (modalType === 'updatePost' && <FormPost />)}
        {(modalType === 'createComment' && <FormComment />) ||
          (modalType === 'updateComment' && <FormComment />)}
      </div>
    </div>
  );
};

export default Modal;
