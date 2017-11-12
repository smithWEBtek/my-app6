import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArrayCount from './index.js'
import {mixedCaseLetters, colors, pets, fruits } from './Arrays';

const Arrays = [mixedCaseLetters, colors, pets, fruits]
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      arraysIndex: this.props.arraysIndex,
      array: Arrays[this.props.arraysIndex],
      msg: this.props.msg,
      arrayCase: 0,
    }
  }

  handleChangeArrayCase(e){
    if (this.state.arrayCase === 0){
      this.setState({
        array: this.state.array.map( a => a.toUpperCase() ),
        arrayCase: 1,
      })
    } else {
      this.setState({
        array: this.state.array.map( a => a.toLowerCase() ),
        arrayCase: 0,
      })
    }
  }

  handleChangeArraysIndex(e){
    if (this.state.arraysIndex < Arrays.length-1){
      this.setState({
        arraysIndex: this.state.arraysIndex += 1,
        array: Arrays[this.state.arraysIndex],
      })
    } else {
      this.setState({
        arraysIndex: 0,
        array: Arrays[0],
      })
    }
  };

  render() {
    const array = this.state.array.map(a => a.toUpperCase().concat(' '));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.array}</p>
        <button className="change-case" value={this.state.case} onClick={this.handleChangeArrayCase.bind(this)}>{this.state.msg}</button>
        <button className="change-arrays-index" value={this.state.arraysIndex} onClick={this.handleChangeArraysIndex.bind(this)}>Random different Array</button>
      </div>
    );
  }
}

export default App;
