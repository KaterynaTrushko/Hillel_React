import React from "react";
import { HASHTAG, AUTHORS } from "../date";
import PropTypes from 'prop-types';


export class Filter extends React.Component{
 state = { 
  checkedHash : false,
  checkedAuthor : false,
  text : "",
  authorsBox : [],
}

onStateAutor = (e) => {
  this.setState({
    checkedAuthor : !this.state.checkedAuthor,
  }) 
  // const value = e.target.value;
  // const { onSerachAutor } = this.props;
  // const authorsBox = this.state.authorsBox;
  // authorsBox.push(value);
  // this.setState({})
  // onSerachAutor(value);
  //   console.log(e.target.value);
  //   console.log(e.target.checked);

 }

  render(){
    // const {onSerachAutor,
    //   onSerachHash,
    //   onSerachTitle,
    //   onSerachDescription, } = this.props;

    return(
      <>
       {/* <label>
         <input type="text"></input>
        <button>Serch</button>
      </label>
      <div>
          <b>Hashtag Serch:</b>
          {HASHTAG.map((el) => (
            <span key={el}>
              <input
                type="checkbox"
                id={"hashtag-" + el}
                name="checkedHash"
                value={el}
                checked = {this.state.checkedHash}
              />
              <label htmlFor={"hashtag-" + el}>{el}</label>
            </span>
          ))}
        </div>
        <b>Author Serch:</b>{" "}
        {AUTHORS.map((el) => (
          <span key={el}>
            <input
              type="checkbox"
              id={"author-" + el}
              name = "checkedAuthor"
              value={el}
             onChange
            />
          <label htmlFor={"author-" + el}>{el}</label>
          </span>
        ))} */}
      </>
    )
  }
}

Filter.propTypes = {
  onSerachAutor : PropTypes.func,
  onSerachHash : PropTypes.func,
  onSerachTitle : PropTypes.func,
  onSerachDescription : PropTypes.func,
}


