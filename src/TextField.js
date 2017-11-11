import React, { Component } from 'react';


// export default class TextField extends Component {
  //  render() {
    //    return (
      //      <textarea
      //        className="field field-light"
      //        onChange={this.props.onChange}
      //        maxLength={this.props.limit || defaultLimit} 
      //      />
      //    );
      //  }
      // }
      
      
const defaultMaxLength = 2

export const TextField2 = (props) =>
<input
  className="field field-light"
  onChange={props.onChange}
  maxLength={props.maxLength || defaultMaxLength} 
/>;