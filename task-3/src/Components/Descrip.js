import React, { Component } from "react";
import '../App';
import PropTypes from 'prop-types';

export default class Descrip extends Component {
  render() {

    const date = this.props.props;

    const color = {
      color: 'red',    
    }

    const parseDate = (str) => {
      let mydate = str.slice(0,10);
      let [year, moun, day] = mydate.split("-");
      const myDate = (new Date(year, moun, day).toUTCString());
      return myDate;
      }

    return (
      <>
        <div className="descrip">
        <p style={date.isSpecial ? color : null}>{date.content}</p>
          <p>created: {parseDate(date.dateCreated)}</p>
          <p>autho: {date.author}</p>
          categories: {date.categories&&date.categories.map(el =>(
            <div key={el.id}>{el.name}</div>
          ))}       
        </div>
      </>
    )
  }
}

Descrip.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  isSpecial: PropTypes.bool,
  dateCreated: PropTypes.number,
  categories: PropTypes.object

}

Descrip.defaultProps = {
  
  content: null
}