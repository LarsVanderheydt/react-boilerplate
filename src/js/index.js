/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { hydrate } from 'react-dom';
import App from './containers/App';

import store from './store/';
import { Provider } from 'mobx-react';

const init = () => {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#app`),
  );
};

init();
