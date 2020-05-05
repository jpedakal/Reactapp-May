import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);

