import React from 'react';
import NavBar from '../navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

function Layout(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
