import React from 'react';
import StarshipItem from '../Components/StarshipItem';
import PropTypes from "prop-types";


export  class StarshipList extends React.Component {

  render(){

    return (
      <div >
        
        {this.props.date.map(ship =>(
          <div key={ship.name}><StarshipItem ship={ship}/></div>
        ))}
        
      </div>
    );
  }


  
}


StarshipList.propTypes = {
  date : PropTypes.arrayOf(
      PropTypes.shape ({
      MGLT: PropTypes.string,
      cargo_capacity: PropTypes.string,
      consumables: PropTypes.string,
      cost_in_credits: PropTypes.string,
      created: PropTypes.string,
      crew: PropTypes.string,
      edited: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      hyperdrive_rating: PropTypes.string,
      length: PropTypes.string,
      manufacturer: PropTypes.string,
      max_atmosphering_speed: PropTypes.string,
      model: PropTypes.string,
      name: PropTypes.string,
      passengers: PropTypes.string,
      pilots: PropTypes.arrayOf(PropTypes.string),
      starship_class: PropTypes.string,
      url: PropTypes.string,
    })
  )
}

StarshipList.defaultProps = {
  date : []
}


