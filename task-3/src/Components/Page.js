import React, { Component } from "react";
import Filter from "./Filter";
import NewsList from "./NewsList";
import PropTypes from 'prop-types';
import news from "../news";


export default class Page extends Component {



 
  render(){
   
   
    return(
      <>
        <div className="page">
          <Filter news={ news } /> 
          {/* <NewsList props={ news }/>     */}
        </div>
      </>
    )
  }

}

