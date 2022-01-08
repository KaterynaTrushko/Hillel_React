import React from 'react';
import { StarshipList } from './StarshipList';
import SerachStarship from './SerachStarship';

export default class StarshipPage extends React.Component {
  state = {
    status: "initial",
    error: null,
    date: null,
    url: "https://swapi.dev/api/starships/"
  };

stateUpdete = (str) =>{
  this.setState({
    url: str,
  })
}


  render() {
    return (
      <div>
          <SerachStarship stateUpdete={this.stateUpdete}/>
          {this.state.status === "initial" && "...Loading" } 
          {this.state.status === "success" && <StarshipList date={this.state.date} />} 
          {this.state.status === "error" && this.state.error } 
      </div>
    );
  }

  componentDidMount() {
    let url = this.state.url;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then((date) => {
        this.setState({
          status: "success",
          error: null,
          date: date.results,
        });
        console.log(date.results);
      })
      .catch((error) => {
        this.setState({
          status: "error",
          error: error.message,
          date: null,
        });
        console.log(error);
        console.log(error.message);
      });

  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateUrl = prevState.url;
    const url = this.state.url;
    if(prevStateUrl !== url){
      fetch(url)
      .then((response) => {
        if (response.length > 0) {
          return response.json();
        } else {
          console.log(response);
          this.setState({
            status: "error",
            error: "По вашему запросу ничего не найдено",
            date: null,
          });
        }
      })
      .then((date) => {
        this.setState({
          status: "success",
          error: null,
          date: date.results,
        });
        console.log(date.results);
      })
      .catch((error) => {
        this.setState({
          status: "error",
          error: "По вашему запросу ничего не найдено",
          date: null,
        });
        console.log(error);
        console.log(error.message);
      });
    }
  }
}






