import React from 'react';
import NavBar from '../navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

import './styles/style.css';

import ReceptSlaid from '../recipes/ReceptSlaid';


function Layout(): JSX.Element {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
