/**
 * Layout Component - Main wrapper for all pages
 * Provides consistent navigation, footer, and page structure
 * Implements responsive design and accessibility features
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      {/* Main navigation header */}
      <Navbar />
      
      {/* Main content area - renders current page */}
      <main className="main-content" role="main">
        <Outlet />
      </main>
      
      {/* Global footer */}
      <Footer />
    </div>
  );
};

export default Layout;