import React, { Component } from "react";
import Photo from "./Photo";
import Title from "./Title";
import Content from "./Content";
import PropTypes from 'prop-types';
import '../App';

export default class NewsItem extends Component {
  render() {
    const news  = this.props.props;
   
    return (
      <>
        <div className="newsIitem">
          <div className="content">
            {news.photo&&<Photo photo={news.photo} link={news.link}/>}
            <div className="wrap-item">
              <Title title={news.title}/>
              <Content news={news}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

NewsItem.propTypes = {
  
    props : PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        isSpecial: PropTypes.bool,
        dateCreated: PropTypes.string,
        categories: PropTypes.array,
        photo: PropTypes.string,
        link: PropTypes.string,
        author: PropTypes.string,
       
  })
}

NewsItem.defaultProps = {
  props : {}
}