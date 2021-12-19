import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Categories extends Component {

  render() {

    let date = this.props.props;
   

    return (

      <>
        <ul>
          {date.map(el => <li key={Date.now() + Math.random()}>{el.name}</li>)}
         </ul>
      </>
    )

  }
}

Categories.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  isSpecial: PropTypes.bool,
  dateCreated: PropTypes.number,
  categories: PropTypes.object

}
