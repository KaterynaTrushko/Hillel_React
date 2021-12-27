import React, { Component } from "react";
import '../App';
import NewsList from './NewsList';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  handleChangeSearch = (mes) => {
    let { onChangeSearch } = this.props;
    console.log(mes);
    onChangeSearch(mes);
  };

  render() {

  const { handleState, search } = this.props;

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
        <div className="input">
          <label >
            <input
              type="text"
              value={search}
              onChange={(e)=>this.handleChangeSearch(e.target.value)} />
          </label>
        </div>
      </>
    )
 
  }
}


Filter.propTypes = {
  handleState: PropTypes.func,
  onChangeSearch: PropTypes.func,
  search : PropTypes.string
}

Filter.defaultProps = {
  handleState: console.log,
}



 

