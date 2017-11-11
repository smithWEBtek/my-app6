import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      animals: this.props.arg,
      msg: this.props.msg,
      case: 0,
    }
  }

  handleChangeAnimals(e){
    if (this.state.case === 1){
      this.setState({
        animals: this.state.animals.map( a => a.toUpperCase() ),
        case: 0,
      })
    } else {
      this.setState({
        animals: this.state.animals.map( a => a.toLowerCase() ),
        case: 1,
      })
    }
  }

  render() {
    const animals = this.state.animals.map(a => a.toUpperCase().concat(' '));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.animals}</p>
        <button className="change-animals" value={this.state.animals} onClick={this.handleChangeAnimals.bind(this)}>{this.state.msg}</button>
      </div>
    );
  }
}

export default App;
