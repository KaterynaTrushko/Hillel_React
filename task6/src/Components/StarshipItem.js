
import React from 'react';
import PropTypes from "prop-types";


export default class StarshipItem extends React.Component {

render(){

const { MGLT,
  cargo_capacity,
  consumables,
  cost_in_credits,
  created,
  crew,
  edited,
  films,
  hyperdrive_rating,
  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  name,
  passengers,
  pilots,
  starship_class,
  url} = this.props.ship;

    return (
      <div className='ship'>
        <b>MGLT:</b> {MGLT}<br/>
        <b>cargo capacity:</b> {cargo_capacity}<br/>
        <b>consumables:</b> {consumables}<br/>
        <b>cost in credits:</b> {cost_in_credits}<br/>
        <b>created:</b> {created}<br/>
        <b>crew:</b> {crew}<br/>
        <b>edited:</b> {edited}<br/>
        <b>films:</b> {films.map(el => <li key={el}>{el}</li>)}<br/>
        <b>rating:</b> {hyperdrive_rating}<br/>
        <b>length:</b> {length}<br/>
        <b>manufacturer:</b> {manufacturer}<br/>
        <b>max atmosphering speed:</b> {max_atmosphering_speed}<br/>
        <b>model:</b> {model}<br/>
        <b>name:</b> {name}<br/>
        <b>passengers:</b> {passengers}<br/>
        <b>pilots:</b> {pilots.map(el =><li key={el}>{el}</li>)}<br/>
        <b>starship_class:</b> {starship_class}<br/>
        <b>url:</b> {url} <br/>     
      </div>
    );
  } 
}

StarshipItem.propTypes = {
   ship: PropTypes.shape({
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
    }
  )
 }

 StarshipItem.defaultProps = {
    ship:{}
 }