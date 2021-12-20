import React, { Component } from "react";
import Photo from "./Photo";
import Title from "./Title";
import Descrip from "./Descrip";
import ButtonItem from "./ButtonItem";
import '../App';

export default class NewsItem extends Component {
  render() {
    const news  = this.props.props;
   
    return (
      <>
        <div className="newsIitem">
          <div className="content">
            {news.photo&&<Photo props={news}/>}
            <div className="wrap-item">
              <Title props={news}/>
              <Descrip props={news}/>
              <ButtonItem props={news}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}