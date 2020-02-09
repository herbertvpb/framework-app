/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { AppMenu } from './styles';

export class Menu extends Component {
  render() {
    return (
      <AppMenu>
        <a
          className={window.location.pathname === '/' ? 'selected' : 'default'}
          href="/"
        >
          Postagens
        </a>
        <a
          className={
            window.location.pathname === '/albuns' ||
            window.location.pathname === '/photos'
              ? 'selected'
              : 'default'
          }
          href="/albuns"
        >
          Álbuns
        </a>
        <a
          className={
            window.location.pathname === '/todos' ? 'selected' : 'default'
          }
          href="/todos"
        >
          Tarefas
        </a>
      </AppMenu>
    );
  }
}
