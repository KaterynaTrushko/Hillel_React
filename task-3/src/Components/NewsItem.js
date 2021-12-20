import React, { Component } from "react";
import Photo from "./Photo";
import Title from "./Title";
import Descrip from "./Descrip";
import ButtonItem from "./ButtonItem";
import '../App';

export default class NewsItem extends Component {
  render() {
    const news  = this.props.props;
    console.log(news)

    return (
      <>
        <div className="newsIitem">newsItem
          <div className="content">
            <Photo/>
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