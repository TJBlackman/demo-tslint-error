import React, { RefAttributes } from 'react';
import Header from './header';
import { Container } from '@material-ui/core';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};
