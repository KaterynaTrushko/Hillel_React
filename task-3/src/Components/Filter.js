import React, { Component } from "react";
import '../App';
import NewsList from './NewsList';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  state = {
    click : {
      isPhoto : false,
      isLink : false,
      isSpecial : false,
    }
   
  }

  render(){

    const {
      isPhoto,
      isLink,
      isSpecial
    } = this.state.click;

  let  { news  } = this.props;

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
          <button onClick = {()=> this.setState({click: {
            ...this.state.click,
            'isPhoto' :!isPhoto,
          }})} className="button-filter">isPhoto</button>
            <button onClick = {()=> this.setState({click: {
            ...this.state.click,
            'isLink' :!isLink,
          }})} className="button-filter">isLink </button>
            <button onClick = {()=> this.setState({click: {
            ...this.state.click,
            'isSpecial' :!isSpecial,
          }})}  className="button-filter">isSpecial </button>
          </div>
        <div>
          <NewsList props={filterList}/>
        </div>
      </>
    )

    
  }

 
}

NewsList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  isSpecial: PropTypes.bool,
  dateCreated: PropTypes.number,
  categories: PropTypes.object

}
