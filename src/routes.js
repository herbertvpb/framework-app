import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';

import Posts from './pages/Posts';
import Albuns from './pages/Albuns';
import Todos from './pages/Todos';
import Photos from './pages/Photos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/albuns" component={Albuns} />
        <Route path="/todos" component={Todos} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </BrowserRouter>
  );
}
