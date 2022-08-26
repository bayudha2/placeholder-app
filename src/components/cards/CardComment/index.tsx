import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

import type { CommentType } from 'src/features/comment';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { toggleModal } from 'src/helper/helperSlice';

type CardType = {
  dataComment: CommentType;
  deleteComment: any;
  isLoading: boolean;
};

const CardComment = ({ dataComment, deleteComment, isLoading }: CardType) => {
  const dispatch = useAppDispatch();

  function handleOpenModal(): void {
    dispatch(
      toggleModal({
        dataComment: {
          body: dataComment.body,
          email: dataComment.email,
          id: dataComment.id,
          name: dataComment.name,
          postId: dataComment.postId
        },
        type: 'updateComment'
      })
    );
  }

  function handleDeleteComment() {
    deleteComment(dataComment.id);
  }
  return (
    <div className="min-h-[100px] w-[300px] border border-solid border-gray-200 hover:shadow-md transition-all ease-in-out duration-300 rounded-md p-4">
      <h2 className="text-base leading-4 font-semibold text-gray-800">{dataComment.name}</h2>
      <small className="text-gray-500 text-xs">{dataComment.email}</small>
      <p className="text-xs mt-2 line-clamp-3">{dataComment.body}</p>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={handleOpenModal}
          className="flex items-center rounded-md bg-yellow-400 px-2 py-1">
          <PencilIcon className="h-4 w-4 icon-right text-white" />{' '}
        </button>
        <button
          disabled={isLoading}
          onClick={handleDeleteComment}
          className="flex items-center rounded-md disabled:bg-gray-300 bg-rose-500 px-2 py-1">
          <TrashIcon className="h-4 w-4 icon-right text-white" />{' '}
        </button>
      </div>
    </div>
  );
};

export default CardComment;
