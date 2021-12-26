import React, { Component } from "react";
import Photo from "./Photo";
import Title from "./Title";
import Descrip from "./Descrip";
import PropTypes from 'prop-types';
import '../App';

export default class NewsItem extends Component {
  render() {
    const news  = this.props.props;
   
    return (
      <>
        <div className="newsIitem">
          <div className="content">
            {news.photo&&<Photo props={news}/>}
            <div className="wrap-item">
              <Title props={news}/>
              <Descrip props={news}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

NewsItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  isSpecial: PropTypes.bool,
  dateCreated: PropTypes.number,
  categories: PropTypes.object

}

NewsItem.defaultProps = {
  title: "Title",
  content: null
}