import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TextField2 } from './TextField'

ReactDOM.render(
  <App 
    arraysIndex={0}
    msg="Click to change Array"
    />,
  document.querySelector('#root')
)

ReactDOM.render(
  <TextField2 
  
  />, 
  document.querySelector('#root2')
)