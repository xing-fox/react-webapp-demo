import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/common.css';
// import App from './App';
import 'antd/dist/antd.css';
import Index from './view/index';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Index} />
  </BrowserRouter>,
  document.getElementById('root'));
serviceWorker.unregister();
