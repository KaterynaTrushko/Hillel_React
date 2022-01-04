import React from "react";
import PropTypes from 'prop-types';
export default class NewsItem extends React.Component{
   

  render(){
   const { props : {
    author,
    description,
    hashtag,
    id,
    photo,
    title,},
    onRemoveNews,
   } = this.props;


    return(
      <div style={{border:'1px solid rgba(0, 0, 0, 0.35)', }}>
        NewsItems
        <p><b>title:</b>{title}</p>
        <p><b>author:</b> {author}</p>
        <p><b>description:</b> {description}</p>
        <p><b>hashtag:</b>{hashtag}</p>
        <img style={{
          width: '150px',
          height: '100px',
        }} src={photo + `?v=${id}`} alt={title}></img>
        <div><button onClick={()=>onRemoveNews(id)}>Remove</button></div>
      </div>
    )
  }
}

NewsItem.propTypes = {
  props: 
    PropTypes.shape({
      author: PropTypes.string,
      description: PropTypes.string,
      hashtag: PropTypes.string,
      id: PropTypes.string,
      photo: PropTypes.string,
      title: PropTypes.string,     
       
  }),
  onRemoveNews : PropTypes.func,
}

NewsItem.defaultProps = {
   props : {},
   onRemoveNews: ()=>{}
  };
