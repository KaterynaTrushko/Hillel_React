import React, { Component } from "react";
import '../App';
import PropTypes from 'prop-types';

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

Photo.propTypes = {
  photo: PropTypes.string,
}

Photo.defaultProps = {
  photo: null
}