import React from "react";
import PropTypes from "prop-types";
import  { Item }  from "./Item";
import { gsap } from "gsap";

export class List extends React.Component {



  render() {
    
    const { data } = this.props;
    console.log(data);
    return (
      <>
        {data.map(el => (
          <div key={el.name}><Item  el={el}  /></div>
        ))}
      </>
    )
  }
}

List.propTypes = {

  data : PropTypes.arrayOf(
    PropTypes.shape({
    body: PropTypes.string,
    emaile : PropTypes.string,
    id : PropTypes.number,
    checked : PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      ),
    name : PropTypes.string,
    postId: PropTypes.number,
  }))

};

List.defaultProps = {
  data : [],
};