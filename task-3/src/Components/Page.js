import React, { Component } from "react";
import Filter from "./Filter";
import PropTypes from 'prop-types';

import news from "../news";


export default class Page extends Component {



 
  render(){
    const { news } = this.props;
   
    return(
      <>
        <div className="page">
          <Filter news = { news } />     
        </div>
      </>
    )
  }

}

Page.propTypes = {
  
}

Page.defaultProps = {
 
}