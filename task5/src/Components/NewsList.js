import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

export default class NewsList extends React.Component{
   

  render(){
    const {news, onRemoveNews} = this.props;
  
    return(
      <>
      <div>NewsList</div>
      <div>{news.map((el) => (
       <div key={el.id}><NewsItem 
        props={el}
        onRemoveNews = {onRemoveNews} /></div>
      ))}</div>
      </>
    )
  }
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      photo: PropTypes.string,
      title: PropTypes.string,     
      author: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string,)
      ]),        
      hastag: PropTypes.arrayOf(
        PropTypes.string,
      )})),
  onRemoveNews : PropTypes.func.isRequired
}

NewsList.defaultProps = {
   news : [],
   onRemoveNews : function(){},
  };

