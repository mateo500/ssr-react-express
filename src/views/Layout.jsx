import React from 'react';
import { Navbar } from '../components/layout/navbar';

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
