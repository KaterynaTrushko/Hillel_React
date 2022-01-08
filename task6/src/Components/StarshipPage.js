import React, { useCallback } from 'react';
import { StarshipList } from './StarshipList';
import PropTypes from "prop-types";

class StarshipPage extends React.Component {
  state = {
    status: 'initial',
    error: null,
    date: null,
  }




  render(){
    return (
      <div>
        StarshipPage
        {this.state.status == 'success'? <StarshipList date = {this.state.date}/>:'...Loading'}
        {this.state.error && <span>{this.state.error}</span>}
      </div>
    );
  }


  componentDidMount(){
    let url = 'https://swapi.dev/api/starships/';
    fetch(url)
    .then(response => {
      return response.json()})
    .then(date => {
      this.setState({
        status: 'success',
        error: null,
        'date': date.results, 
      });
      console.log(date.results);
    })
    .catch(error => {
      this.setState({
          status: 'error',
          error: error.message,
          date:null,
      });
      console.log(error.message);
     })
  }

}

export default StarshipPage;




