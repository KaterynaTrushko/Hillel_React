import React, { Component } from "react";
import '../App';
import PropTypes from 'prop-types';

export default class Content extends Component {
  render() {

    const {news} = this.props;

    const color = {
      color: 'red',    
    }

    const parseDate = (str) => {
      let mydate = str.slice(0,10);
      let [year, moun, day] = mydate.split("-");
      const myDate = (new Date(year, moun, day).toUTCString());
      return myDate;
      }

    return (
      <>
        <div className="content_el">
        <p style={news.isSpecial ? color : null}>{news.content}</p>
          <p>created: {parseDate(news.dateCreated)}</p>
          <p>autho: {news.author}</p>
          <p>link:{news.link && <a href={news.link}>{news.link}</a>}</p>
          categories: {news.categories&&news.categories.map(el =>(
            <div key={el.id}>{el.name}</div>
          ))}       
        </div>
      </>
    )
  }
}

Content.propTypes = {
  
  news : PropTypes.shape({
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

Content.defaultProps = {
news : {}
}