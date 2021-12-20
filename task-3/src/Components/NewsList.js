import React, { Component } from "react";
import NewsItem from "./NewsItem";
import '../App';

export default class NewsList extends Component{
  render(){
    const news  = this.props.props;
    return(
      <>
        <div className="newsList">{news.map(el => <li key={Date.now() + Math.random()}>{el.link 
        ? <a href={el.link}><NewsItem props={el}/></a>
        :<NewsItem props={el}/>}</li>)}
        </div>
      </>
    )
  }
}


