import React, { Component } from "react";
import '../App';

export default class Photo extends Component {
  render() {
    const {...date} = this.props;
    
    return (
      <>
        <div className="photo"><img src={date.props.photo} alt="photo"/></div>
      </>
    )
  }
}