import React, { useEffect, useRef } from 'react';

import { toggleModal } from 'src/helper/helperSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import showToast from 'src/utils/useToast';
import { useAddCommentMutation, useUpdateCommentMutation } from '../../services/commentExtend';

const FormComment = () => {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const bodyRef = useRef<HTMLInputElement>();

  const dispatch = useAppDispatch();
  const { dataComment, modalType } = useAppSelector((state) => state.helper);
  const [updateComment, { isLoading, isSuccess }] = useUpdateCommentMutation();
  const [addComment, { isLoading: addLoading, isSuccess: addSuccess }] = useAddCommentMutation();

  useEffect(() => {
    nameRef.current.value = dataComment.name ?? '';
    bodyRef.current.value = dataComment.body ?? '';
    emailRef.current.value = dataComment.email ?? '';
  }, []);

  const modalAction = {
    createComment: {
      label: 'Add comment',
      message: 'Success create comment!',
      mutation: addComment
    },
    updateComment: {
      label: 'Edit comment',
      message: 'Success update comment!',
      mutation: updateComment
    }
  };

  async function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();

    const payloadData = {
      body: bodyRef.current.value,
      email: emailRef.current.value,
      id: dataComment.id,
      name: nameRef.current.value,
      postId: dataComment.postId
    };

    modalType === 'createComment' && delete payloadData.id;

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
        <label htmlFor="name" className="mb-1 w-20 text-sm font-semibold text-gray-600">
          Name
        </label>
        <input
          className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
          placeholder="Enter comment name…"
          id="name"
          ref={nameRef}
          name="name"
          type="text"
        />
      </div>
      <div className="mt-4 flex items-center gap-4 px-8">
        <label htmlFor="email" className="mb-1 w-20 text-sm font-semibold text-gray-600">
          email
        </label>
        <input
          className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
          placeholder="Enter comment email…"
          id="email"
          ref={emailRef}
          name="email"
          type="email"
        />
      </div>
      <div className="mt-4 flex items-center gap-4 px-8">
        <label htmlFor="body" className="mb-1 w-20 text-sm font-semibold text-gray-600">
          Body
        </label>
        <input
          className={`h-[45px] p-2 w-full rounded-xl border border-solid text-sm placeholder-gray-400 outline-none focus:border-emerald-500 focus:outline-none focus:ring-0`}
          placeholder="Enter comment body…"
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
            {isLoading || addLoading ? 'Saving…' : 'Save comment'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormComment;
