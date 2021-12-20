import React, { Component } from "react";
import '../App';

export default class Filter extends Component {
  render(){
    return(
      <>
      <div className="filter">
        <button className="button-filter">isPhoto</button>
        <button className="button-filter">isLink  </button>
        <button className="button-filter">isSpecial </button>
      </div>
      </>
    )
  }
}

{/* <div className="filter">filter
<button className="button-photo">isPhoto</button>
<button className="button-link">isLink  </button>
<button className="button-special">isSpecial </button>
</div> */}