import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import type { UserType } from 'src/features/user';

const CardUser = ({ address, company, phone, website, email, name, username, id }: UserType) => {
  return (
    <div className="min-h-[200px] w-[400px] border border-solid border-gray-200 hover:shadow-md transition-all ease-in-out duration-300 rounded-md px-4 pt-4">
      <div className="flex items-center gap-2">
        <UserCircleIcon className="h-10 w-10 text-gray-800" />
        <div>
          <h2 className="text-base font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">@{username}</p>
        </div>
      </div>
      <p className="my-5 text-sm text-gray-800">
        {' '}
        I live in {address.suite}, {address.street}, {address.city}. Currently work at{' '}
        {company.name}.
      </p>
      <p className="text-xs">
        <span className="text-main-30 cursor-pointer">{email}</span> / {website} /{' '}
        <span className="text-gray-600">{phone}</span>
      </p>
      <div className="flex w-full justify-center items-center mt-2">
        <Link
          to={{
            pathname: '/status'
          }}
          state={{
            id
          }}
          className="flex justify-center items-center py-4">
          <button className="btn-user-card">
            <p>See Posts</p>
            <ChevronRightIcon className="h-4 w-4 icon-right text-gray-800" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardUser;
