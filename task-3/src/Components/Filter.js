import React, { Component } from "react";
import '../App';
import NewsList from './NewsList';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  state = {
    isPhoto : false,
    isLink : false,
    isSpecial : false, 
  }



render(){
  const {isPhoto, isLink, isSpecial} = this.state;

  let { news } = this.props;
  const filterList = news.filter(el => {
  if (isPhoto && el.photo === null) return false;
  if (isLink && el.link === null) return false;
  if (isSpecial && el.isSpecial === false) return false;
    return true;
  }
)




    return(
      <> 
        <div className="filter">
          <button onClick = {()=> this.setState({
            ...this.state,
            isPhoto:!isPhoto,
          })} className="button-filter">isPhoto</button>
            <button onClick = {()=> this.setState({
            ...this.state,
            isLink:!isLink,
          })} className="button-filter">isLink </button>
            <button onClick = {()=> this.setState({
            ...this.state,
            isSpecial:!isSpecial,
          })}  className="button-filter">isSpecial </button>
          </div>
        <div>
          {console.log(isPhoto, isLink, isSpecial)}
          {console.log(filterList)}
        </div>
      </>
    )

    
  }

 
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number,
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
  news: [{
        id: null,
        title: null,
        content: null,
        isSpecial: null,
        dateCreated: null,
        categories: null,
        photo: null,
        link: null,
        author: null,    
  }]
}
