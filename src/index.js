import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import Router from './Router';
import store from './store';
import { Provider } from 'react-redux';
import modalReducer from './modalStore';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>,
  document.getElementById('root')
);
