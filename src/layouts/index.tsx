import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-[20%]">
        <Outlet />
      </div>
      <div className="mb-10" />
      <Footer />
    </>
  );
};

export default Layout;
