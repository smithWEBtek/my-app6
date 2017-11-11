import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App 
    arraysIndex={0}
    msg="Click to change Array"
    />,
  document.querySelector('#root')
)
 