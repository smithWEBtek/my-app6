import React, { Component } from 'react';


const defaultMaxLength = 2

export const TextField2 = (props) =>
<input
  className="field field-light"
  onChange={props.onChange}
  maxLength={props.maxLength || defaultMaxLength} 
/>;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

export class Welcome1 extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export function Welcome2(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function Welcome3() {
  return (
    <div>
      <Welcome1 name="Sara" />
      <Welcome2 name="Cahal" />
      <Welcome1 name="Edite" />
    </div>
  );
}