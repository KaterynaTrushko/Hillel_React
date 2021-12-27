import React, { Component } from "react";
import '../App';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const {title}  = this.props;
    
    return (
      <>
        <div className="title">{title}</div>
      </>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: "Title",
}