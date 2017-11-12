import React, { Component } from 'react';

export default class FruitList extends Component {
  constructor(){
    super();

    this.state = {
      eaten: 'false',
      fruits: this.props.fruitList,
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.fruits.map(fruit =>  <li>fruit</li> )}
        </ul>
      </div>
    )
  }
};