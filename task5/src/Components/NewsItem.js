import React from "react";
import PropTypes from 'prop-types';
import { HASHTAG, AUTORS } from "../date";



export default class NewsItem extends React.Component{
 state = {
   autor : [this.props.props.autor],
   hashtag : [this.props.props.hashtag],

 }

  render(){
   const { props : {
    description,
    id,
    photo,
    autor,
    title,},
    onRemoveNews,
   } = this.props;

    return(
      
      <div style ={{border:'1px solid rgba(0, 0, 0, 0.35)', }}>
        NewsItems
        <p><b>Title:</b>{title}</p>
        <b>Autor:</b> {AUTORS.map(el =>(
           <span key={el} >
           <input type="radio" id={"autor-"+el}  readOnly value={this.state.autor} checked={el == this.state.autor? true : false}/>
           <label htmlFor={"autor-" + el}>{el}</label>
         </span>       
        ))}
        <div>
        <b>Hashtag:</b> {HASHTAG.map(el =>(
           <span key={el} >
           <input type="checkbox" id={"hashtag-"+el}  readOnly value={this.state.hashtag} checked={el == this.state.hashtag? true : false}/>
           <label htmlFor={"hashtag-" + el}>{el}</label>
         </span>       
        ))}
      </div>
        <p><b>description:</b> {description}</p>
        



        <img style={{
          width: '150px',
          height: '100px',
          objectFit: 'contain',
        }} src={photo + `?v=${id}`} alt={title}></img>
        <div><button onClick={()=>onRemoveNews(id)}>Remove</button></div>
      </div>
    )
  }
}

NewsItem.propTypes = {
  props: 
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      photo: PropTypes.string,
      title: PropTypes.string, 
      autor: PropTypes.string,     
      hastag: PropTypes.string,     
       
  }),
  onRemoveNews : PropTypes.func,
}

NewsItem.defaultProps = {
   props : {},
   onRemoveNews: ()=>{}
  };
