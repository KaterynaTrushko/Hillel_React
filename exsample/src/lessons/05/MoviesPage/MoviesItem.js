import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { GENRES, ACTORS, RATINGS } from "../data";

export class MoviesItem extends PureComponent {
  render() {
    const { movie: {
      id,
      title,
      description,
      rating,
      genres,
      photo,
      actors,
    }, onRemoveMovie } = this.props;

    const ratingData = RATINGS.find((el) => el.value === rating);
    const genresData = GENRES.filter((srcGenre) => {
      return genres.indexOf(srcGenre.value) !== -1;
    });
    const actorsData = ACTORS.filter((srcActor) => {
      return actors.indexOf(srcActor.id) !== -1;
    });

    return (
      <div className="movie-item">
        <h1>{title}</h1>
        <div><img style={{
          width: '300px',
          height: '200px',
          objectFit: 'cover',
        }} src={photo} alt={title}/></div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div><b>Rating: </b>{ratingData.label}</div>
        <div><b>Genre: </b>{genresData.map(g => g.label).join(', ')}</div>
        <div><b>Actors: </b>{actorsData.map(a => a.name).join(', ')}</div>
        <div><button onClick={() => onRemoveMovie(id)}>Delete Movie</button></div>
      </div>
    );
  }
}

export default MoviesItem;

MoviesItem.propTypes = {
  movie: PropTypes.object,
  onRemoveMovie: PropTypes.func.isRequired,
};

MoviesItem.defaultProps = {};
