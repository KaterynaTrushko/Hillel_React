import React from "react";
import PropTypes from "prop-types";
import  { Item }  from "./Item";
import { gsap } from "gsap";

export class List extends React.Component {



  render() {
    
    const { date } = this.props;
    console.log(date);
    return (
      <>
        {date.map(el => (
          <div key={el.name}><Item  el={el} /></div>
        ))}
      </>
    )
  }
}

List.propTypes = {

  date : PropTypes.arrayOf(
    PropTypes.shape({
    body: PropTypes.string,
    emaile : PropTypes.string,
    id : PropTypes.number,
    name : PropTypes.string,
    postId: PropTypes.number,
  }))

};

List.defaultProps = {
  date : [],
};