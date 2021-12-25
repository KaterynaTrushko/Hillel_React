import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';


export default class NewsList extends Component{
  render(){
    const news  = this.props.props;

    // const hendlState = (obj) => {
    //   this.setState({obj});
    // }

    return(
      <>
  
        <div className="newsList">{news.map(el => <li key={Date.now() + Math.random()}>{el.link 
        ? <a href={el.link}><NewsItem props={el}/></a>
        :<NewsItem props={el}/>}</li>)}
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

NewsList.defaultProps = {

}