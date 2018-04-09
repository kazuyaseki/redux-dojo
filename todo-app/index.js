import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();

window.onload = () =>
  render(<Root store={store} />, document.getElementById('root'));
