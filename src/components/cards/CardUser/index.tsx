import React from 'react';

import type { UserType } from 'src/features/user';

const CardUser = ({ address, company, phone, website, email, name, username }: UserType) => {
  return (
    <div className="h-[200px] w-[400px] border border-solid border-gray-200 hover:shadow-md transition-all ease-in-out duration-300 rounded-md p-4">
      <h2 className="text-base font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-sm text-gray-800">
        {' '}
        I live in {address.suite}, {address.street}, {address.city}. Currently work at{' '}
        {company.name}.
      </p>
      <p className="text-xs mt-4">
        <span className="text-main-30">{email}</span> / {website} /{' '}
        <span className="text-gray-600">{phone}</span>
      </p>
    </div>
  );
};

export default CardUser;
