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
    search : "",
  }

  handleState = (value)=> {
    this.setState({
    ...this.state,
    [value] : !this.state[value]})}

  onChangeSearch = (newSearch) => {
    this.setState({'search' : newSearch})
  }
 
  render(){
   const {isPhoto, isLink, isSpecial, search} = this.state;
   
   const filterList = news.filter(el => {
    if (isPhoto && el.photo === null) return false;
    if (isLink && el.link === null) return false;
    if (isSpecial && el.isSpecial === false) return false;
    if (el.author.toLowerCase().indexOf(search.toLowerCase()) < 0) return false;
      return true;
    })
  
    return(
      <>
        <div className="page">
          <Filter  
            handleState={this.handleState}
            onChangeSearch={this.onChangeSearch}
            state={this.state}/> 
          <NewsList news={filterList}/>    
        </div>
      </>
    )
  }
}



