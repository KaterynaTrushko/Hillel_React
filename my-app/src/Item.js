import React, { Component } from "react";
import PropTypes from 'prop-types';
import Categories from "./Categories";

export default class Item extends Component{
 
  
  render(){

    const date = this.props.props;

    const color = {
      color: 'red',    
    }  

    const parseDate = (str) => {
      let mydate = str.slice(0,10);
      let [year, moun, day] = mydate.split("-");
      const myDate = (new Date(year, moun, day).toUTCString());
      return myDate;
      }
     
  
    return(

      <>
      <ul>
        <li key={Date.now() + Math.random()}>
                <p style={date.isSpecial?color:null}>Title: {date.title}</p>       
                <p>Content: {date.content}</p>        
                <p>{parseDate(date.dateCreated)}</p>
                {date.categories&&<Categories props={date.categories}/>}
                <p>Author:  {date.author}</p>        
                {date.photo && <img src={date.photo}></img>}
                <a href={date.link}>{date.link}</a>
          </li>
      </ul>
      
      </>


    )
  }
}
 
Item.propTypes = {
   id: PropTypes.number,
   title: PropTypes.string,
   content: PropTypes.string,
   isSpecial: PropTypes.bool,
   dateCreated: PropTypes.number,
   categories: PropTypes.object
 
   }
 