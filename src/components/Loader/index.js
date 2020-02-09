/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { AppLoader } from './styles';

export class Loader extends Component {
  render() {
    return (
      <AppLoader>
        <div className="loader" />
      </AppLoader>
    );
  }
}
