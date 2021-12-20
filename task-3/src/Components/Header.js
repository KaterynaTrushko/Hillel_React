import React, { Component } from "react";
import Filter from "./Filter";
import '../App';

export default class Header extends Component{
  render(){
    return(
      <>
        <div className="header"> header
          <Filter/>
        </div>
      </>
    )
  }
}