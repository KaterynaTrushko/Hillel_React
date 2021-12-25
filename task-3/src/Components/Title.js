import React, { Component } from "react";
import '../App';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: "Title",
}