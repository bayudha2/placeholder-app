import React, { useEffect, useRef } from 'react';

import showToast from 'src/utils/useToast';
import { useAddPostMutation, useUpdatePostMutation } from 'src/features/post/services/postExtend';
import { toggleModal } from 'src/helper/helperSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';

const FormPost = () => {
  const titleRef = useRef<HTMLInputElement>();
  const bodyRef = useRef<HTMLInputElement>();

  const dispatch = useAppDispatch();
  const { data, modalType } = useAppSelector((state) => state.helper);
  const [updatePost, { isLoading, isSuccess }] = useUpdatePostMutation();
  const [createPost, { isLoading: addLoading, isSuccess: addSuccess }] = useAddPostMutation();

  useEffect(() => {
    titleRef.current.value = data.title ?? '';
    bodyRef.current.value = data.body ?? '';
  }, []);

  const modalAction = {
    createPost: {
      label: 'Add post',
      message: 'Success create post!',
      mutation: createPost
    },
    updatePost: {
      label: 'Edit post',
      message: 'Success update post!',
      mutation: updatePost
    }
  };

  async function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();

    const payloadData = {
      body: bodyRef.current.value,
      id: data.id,
      title: titleRef.current.value,
      userId: data.userId
    };

    modalType === 'createPost' && delete payloadData.id;

    await modalAction[modalType].mutation(payloadData);

    handleClose();
  }

  useEffect(() => {
    if (isSuccess || addSuccess) showToast(modalAction[modalType].message, 'success');
  }, [isSuccess, addSuccess]);

  function handleClose() {
    dispatch(toggleModal({}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 flex items-center gap-4 px-8">
        <label htmlFor="title" className="mb-1 w-20 text-sm font-semibold text-gray-600">
          Title
        </label>
        <input
          className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
          placeholder="Enter post title…"
          id="title"
          ref={titleRef}
          name="title"
          type="text"
        />
      </div>
      <div className="mt-4 flex items-center gap-4 px-8">
        <label htmlFor="body" className="mb-1 w-20 text-sm font-semibold text-gray-600">
          Body
        </label>
        <input
          className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
          placeholder="Enter post body…"
          id="body"
          ref={bodyRef}
          name="body"
          type="text"
        />
      </div>
      <div className="mt-4 flex items-center justify-end rounded-b-lg bg-gray-100 px-6 py-5">
        <div className="flex items-center gap-4">
          <button type="button" onClick={handleClose} className="text-sm text-gray-500">
            Cancel
          </button>
          <button
            disabled={isLoading || addLoading}
            type="submit"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md disabled:pointer-events-none disabled:cursor-not-allowed">
            {isLoading || addLoading ? 'Saving…' : 'Save post'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormPost;
