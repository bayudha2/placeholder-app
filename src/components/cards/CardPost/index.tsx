import React from 'react';
import { ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

import { useAppDispatch } from 'src/hooks/reduxHooks';
import { toggleModal, getComment } from 'src/helper/helperSlice';

import type { PostyType } from 'src/features/post';

type CardType = {
  dataPost: PostyType;
  deletePost: any;
  isLoading: boolean;
};

const CardPost = ({ dataPost, deletePost, isLoading }: CardType) => {
  const dispatch = useAppDispatch();

  function handleOpenModal(): void {
    dispatch(
      toggleModal({
        data: {
          body: dataPost.body,
          id: dataPost.id,
          title: dataPost.title,
          userId: dataPost.userId
        },
        type: 'updatePost'
      })
    );
  }

  function handleDeletePost(): void {
    deletePost(dataPost.id);
  }

  function getComments(): void {
    dispatch(getComment({ data: { id: dataPost.id, title: dataPost.title } }));
  }

  return (
    <div className="min-h-[100px] w-[300px] border border-solid border-gray-200 hover:shadow-md transition-all ease-in-out duration-300 rounded-md p-4">
      <h2 className="text-base leading-4 font-semibold text-gray-800">{dataPost.title}</h2>
      <p className="text-xs mt-2 line-clamp-3">{dataPost.body}</p>
      <div className="flex mt-4 w-full justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleOpenModal}
            className="flex items-center rounded-md bg-yellow-400 px-2 py-1">
            <PencilIcon className="h-4 w-4 icon-right text-white" />{' '}
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={handleDeletePost}
            className="flex items-center rounded-md disabled:bg-gray-300 bg-rose-500 px-2 py-1">
            <TrashIcon className="h-4 w-4 icon-right text-white" />{' '}
          </button>
        </div>
        <button type="button" onClick={getComments} className="btn-user-card">
          <p>See comments</p>
          <ChevronRightIcon className="h-4 w-4 icon-right text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default CardPost;
