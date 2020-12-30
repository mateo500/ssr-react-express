import React from 'react';
import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: '25px' }}>{children}</div>
      <Footer />
    </div>
  );
};
