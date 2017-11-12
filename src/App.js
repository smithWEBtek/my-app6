import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {mixedCaseLetters, colors, pets, fruits } from './Arrays';
import FruitList from './FruitList';

const Arrays = [mixedCaseLetters, colors, pets, fruits]
 
export default class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      showEaten: false,
      fruits: []
    };
  }
 
  componentWillMount() {
    this.updateFruitList();
  }
 
  toggleListMode = () => this.setState({ showEaten: !this.state.showEaten });
 
  updateFruitList = () => {
    // fetch(`/api/fruit?eaten=${this.state.showEaten}`)
    fetch(fruits)
      .then(response => response.json())
      .then(fruits => this.setState({ fruits }));
  }
 
  render() {
    return 
      <FruitList 
      />,
      document.querySelector("#root5")
    }  
  }
