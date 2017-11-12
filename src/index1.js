import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TextField2 } from './TextField'
import { Welcome1, Welcome2, Welcome3 } from './Misc'

ReactDOM.render(
  <App 
    arraysIndex={0}
    msg="Click to change Array"
    />,
  document.querySelector('#root')
)

ReactDOM.render(
  <TextField2 
    message="Character limit is: "
    maxLength="4"
  />, 
  document.querySelector('#root2')
)

ReactDOM.render(
  <Welcome1
    name="Mr. Darby"
    onChange="onChange1"
  />, 
  document.querySelector('#root3')
)
 

ReactDOM.render(
  <Welcome2
    name="Mr. Darby"
    onChange="onChange1"
  />, 
  document.querySelector('#root4')
)
 

ReactDOM.render(
  <Welcome3
    name="Mr. Darby"
    onChange="onChange1"
  />, 
  document.querySelector('#root5')
)
 