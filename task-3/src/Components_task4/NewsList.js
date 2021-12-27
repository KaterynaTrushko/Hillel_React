import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';


export default class NewsList extends Component{
  render(){

    const {news}  = this.props;

    return(
      <>
        <div className="newsList">{news.map(el => <li key={el.id}><NewsItem props={el}/></li>)}
        </div>
      </>
    )
  }
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
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
)}

NewsList.defaultProps = {
  news: []
}