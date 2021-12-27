import React, { Component } from "react";
import '../App';
import NewsList from './NewsList';
import PropTypes from 'prop-types';

export default class Filter extends Component {


render() {

const { handleState } = this.props;
console.log(handleState);

const updateList = (event) => {
let value = event.target.innerText;
handleState(value);

}


    return(
      <> 
        <div className="filter" onClick={(e)=>updateList(e)}>
          <button className="button-filter">isPhoto</button>
            <button className="button-filter">isLink</button>
            <button className="button-filter">isSpecial</button>
          </div>
      </>
    )

    
    }
}


Filter.propTypes = {
  handleState: PropTypes.func,
}

Filter.defaultProps = {
  handleState: console.log,
}



 

