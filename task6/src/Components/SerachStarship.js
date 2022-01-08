
import React from 'react';
import PropTypes from "prop-types";


export default class SerachStarship extends React.Component {
state = {
  url: "https://swapi.dev/api/starships/?search=",
  value : ""
}

  handleSubmit = (e) => {
    e.preventDefault();
    const  value  = this.state.value;
    let url = `${this.state.url}${value}`;
    this.props.stateUpdete(url);

  }

input = (e) => {
  this.setState({
    value: e.currentTarget.value,
  });
  console.log(e.currentTarget.value);
}

render(){

    return (
      <div>
         <form onSubmit={this.handleSubmit} action="">
           <input type="text" name=""  className="text" onChange={this.input} defaultValue={this.state.value}  />
           <button type="submit">Serach</button>
           <span> Enter the name or model of the ship</span>
        </form>   
      </div>
    );
  } 
}

SerachStarship.propTypes = {
  stateUpdete : PropTypes.func,
 }

 SerachStarship.defaultProps = {
  stateUpdete : () => {},
 }