import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/services/routes';
import '../src/assets/scss/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);