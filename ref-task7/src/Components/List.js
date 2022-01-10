import React from "react";
import PropTypes from "prop-types";
import  { Item }  from "./Item";

export class List extends React.Component {


  render() {
    const { date } = this.props;
    console.log(date);
    return (
      <>
        {date.map(el => (
          <div key={el.id}><Item el={el} /></div>
        ))}
        <Item  />
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