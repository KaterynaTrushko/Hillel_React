import React, { Component } from "react";
import Filter from "./Filter";
import NewsList from "./NewsList";
import PropTypes from 'prop-types';
import news from "../news";


export default class Page extends Component {
  state = {
    isPhoto : false,
    isLink : false,
    isSpecial : false, 
  }


myFunction = (v) => {
  console.log(v);
}
 
  render(){
   const {isPhoto, isLink, isSpecial} = this.state;
   
   const filterList = news.filter(el => {
    if (isPhoto && el.photo === null) return false;
    if (isLink && el.link === null) return false;
    if (isSpecial && el.isSpecial === false) return false;
      return true;
    })
  
    return(
      <>
        <div className="page">
          <Filter 
          handleState = {(value)=>this.setState({...this.state,[value] : !this.state[value]})}
   
    /> 
          <NewsList news ={ filterList }  />    
        </div>
      </>
    )
  }
}



