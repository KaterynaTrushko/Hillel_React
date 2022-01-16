import React, {createRef} from "react";
import PropTypes from "prop-types";
import './Item.css';
import { gsap } from "gsap";



export class Item extends React.Component {

  Elem = createRef(); 
  

  
  componentDidMount(){
    let elem = this.Elem.current;
    let timeline = gsap.timeline();
    let elemTransotion = gsap.fromTo(elem, 
      {
        opacity: 0,
        y: 400,
        x: 500
      }, {
        opacity: 1,
        y: 0,
        x: 0,
        ease: 'easeInOut',
        duration: 1,
      })

  }



  render() {
    const {el} = this.props;
   
    return (
      <>
        <div className="form" ref={this.Elem}> 
          <div className="input name">ID {el.id}</div>
          <div className="input name">{el.name }</div>
          <div className="input name">{el.email}</div>
          <div className="input name">{el.body}</div>
          <div className="wrapper">
            <label style={{marginLeft : "25px"}}>1<input value='1' className="hash" type="checkbox" checked={el.checked.includes('1')? true: false} readOnly /></label>
            <label style={{marginLeft : "25px"}}>2<input value='2' className="hash" type="checkbox" checked={el.checked.includes('2')? true: false}  readOnly /></label>
            <label style={{marginLeft : "25px"}}>3<input value='3' className="hash" type="checkbox" checked={el.checked.includes('3')? true: false}  readOnly /></label>
        </div> 
        <input name="submit" className="btn" type="submit" value="Submit" />
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
    checked : PropTypes.arrayOf(PropTypes.string),
    id : PropTypes.number,
    name : PropTypes.string,
    postId: PropTypes.number,
  })

};

Item.defaultProps = {
  el : {
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    email: "Eliseo@gardner.biz",
    checked : '1',
    id: 1,
    name: "id labore ex et quam laborum",
    postId: 1,
  },
};


