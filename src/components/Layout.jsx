import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="min-h-screen pt-24 sm:pt-32 pb-24">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
