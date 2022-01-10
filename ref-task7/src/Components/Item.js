import React from "react";
import PropTypes from "prop-types";
import './Item.css'


export class Item extends React.Component {

  render() {
    const {el} = this.props;
    console.log(el);

    return (
      <>
        <div className="form"> 
          <div className="input name">{el.name }</div>
          <div className="input name">{el.email}</div>
          <div className="input name">{el.body}</div>
          <div className="wrapper">
            <input name="hashtag" className="hash" type="checkbox" required />
            <input name="hashtag" className="hash" type="checkbox" required />
            <input name="hashtag" className="hash" type="checkbox" required />
        </div>
        {/* <input name="submit" className="btn" type="submit" value="Submit" /> */}
        </div>
      
      </>
    )
  }
}

Item.propTypes = {

  date : 
    PropTypes.shape({
    body: PropTypes.string,
    emaile : PropTypes.string,
    id : PropTypes.number,
    name : PropTypes.string,
    postId: PropTypes.number,
  })

};

Item.defaultProps = {
  el : {
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    email: "Eliseo@gardner.biz",
    id: 1,
    name: "id labore ex et quam laborum",
    postId: 1,
  },
};


