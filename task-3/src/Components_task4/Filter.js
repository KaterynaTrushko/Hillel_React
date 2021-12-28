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

  const butStyle = {
    color: 'white',
  };

  const { handleState} = this.props;
  const { isPhoto, isLink, isSpecial, search } = this.props.state;

  console.log(handleState, isPhoto, isLink, isSpecial, search);
  const updateList = (event) => {
  let value = event.target.innerText;
  handleState(value);

}


    return(
      <> 
        <div className="filter" onClick={(e)=>updateList(e)}>
          {isPhoto?<button className="button-filter">isPhoto </button>:<button style = {butStyle} className="button-filter">isPhoto </button>}
          {isLink?<button className="button-filter">isLink</button>:<button style = {butStyle} className="button-filter">isLink</button>}
          {isSpecial?<button className="button-filter">isSpecial</button>:<button style = {butStyle} className="button-filter">isSpecial</button>}
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
    state : PropTypes.shape({
    isPhoto : PropTypes.bool,
    isLink : PropTypes.bool,
    isSpecial : PropTypes.bool,
    search : PropTypes.string,
  }

  )
}

Filter.defaultProps = {
  state : {},
}



 

