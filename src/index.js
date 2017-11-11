import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {evens, odds, users, pets, fruits, heroes} from './Arrays';
 

ReactDOM.render(
  <App 
    arg={pets}
    />,
  document.querySelector('#root')
)