import React, { Component } from "react";
import '../App';

export default class Title extends Component {
  render() {
    const news  = this.props.props;
    
    return (
      <>
        <div className="title">{news.title}</div>
      </>
    )
  }
}