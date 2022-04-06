import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const footerLifeCycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

const bootstrap = [footerLifeCycle.bootstrap];
const mount = [footerLifeCycle.mount];
const unmount = [footerLifeCycle.unmount];

export default {
  bootstrap,
  mount,
  unmount,
};
