import React from 'react';

import { AppHeader } from './styles';

import logo from '../../assets/img/logo-framework.svg';

export function Header() {
  return (
    <AppHeader>
      <img src={logo} alt="Framework" width="196" />
    </AppHeader>
  );
}
