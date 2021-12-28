import React, { Component } from "react";
import '../App';
import PropTypes from 'prop-types';

export default class Photo extends Component {
  render() {
    const {photo, link} = this.props;
    
    return (
      <>
        <div className="photo"> 
          {link?<a href="link"><img src={photo} alt="photo"/></a> :
          <img src={photo} alt="photo"/>}
        </div>
      </>
    )
  }
}

Photo.propTypes = {
  photo: PropTypes.string,
  link: PropTypes.string,
}

Photo.defaultProps = {
  link: null,
  photo: null,
  
}