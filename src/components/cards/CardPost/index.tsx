import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

import { useDeletePostMutation } from 'src/features/post';

import type { PostyType } from 'src/features/post';

const CardPost = ({ body, id, title, userId }: PostyType) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  return (
    <div className="min-h-[100px] w-[300px] border border-solid border-gray-200 hover:shadow-md transition-all ease-in-out duration-300 rounded-md p-4">
      <h2 className="text-base leading-4 font-semibold text-gray-800">{title}</h2>
      <p className="text-xs mt-2">{body}</p>
      <div className="mt-4 flex items-center gap-4">
        <button className="flex items-center rounded-md bg-yellow-400 px-2 py-1">
          <PencilIcon className="h-4 w-4 icon-right text-white" />{' '}
        </button>
        <button
          disabled={isLoading}
          onClick={() => deletePost(id)}
          className="flex items-center rounded-md disabled:bg-gray-300 bg-rose-500 px-2 py-1">
          <TrashIcon className="h-4 w-4 icon-right text-white" />{' '}
        </button>
      </div>
    </div>
  );
};

export default CardPost;
