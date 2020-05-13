import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/journal/bootstrap.min.css"; 
import './index.css';
import App from './App';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

AOS.init();

serviceWorker.unregister();
