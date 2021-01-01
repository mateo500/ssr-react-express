import React from 'react';
import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import './style/globals.styl';

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='children-container'>{children}</div>
      <Footer />
    </div>
  );
};
