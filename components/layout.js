import React from 'react';
import Nav from './navigation';

// todo: refactor nav later
const Layout = ({ children, categories }) => (
  <>
    {/* <Nav categories={categories} /> */}
    {children}
  </>
);

export default Layout;
