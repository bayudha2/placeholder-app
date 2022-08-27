import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1>
        Whoops… there is nothing here please go back to{' '}
        <span className="text-main-40">
          <Link
            to={{
              pathname: '/'
            }}>
            Dashboard
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default NotFound;
