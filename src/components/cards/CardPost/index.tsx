import React from 'react';
import { PencilIcon } from '@heroicons/react/20/solid';

import type { PostyType } from 'src/features/post';

const CardPost = ({ body, id, title, userId }: PostyType) => {
  return (
    <div className="min-h-[100px] w-[300px] border border-solid border-gray-200 hover:shadow-md transition-all ease-in-out duration-300 rounded-md p-4">
      <h2 className="text-base leading-4 font-semibold text-gray-800">{title}</h2>
      <p className="text-xs mt-2">{body}</p>
      <div className="mt-4">
        <button className="flex items-center gap-2 rounded-md bg-yellow-400 px-2 py-1">
          <PencilIcon className="h-4 w-4 icon-right text-white" />{' '}
        </button>
      </div>
    </div>
  );
};

export default CardPost;
