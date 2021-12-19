import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { getBase64 } from "./utils";

import { RATINGS, GENRES, ACTORS } from "../data";

export class MovieForm extends PureComponent {
  state = {
    title: '',
    description: '',
    photo: '',
    rating: RATINGS[0].value,
    genre: [],
    actors: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    const movie = {
      id,
      ...this.state,
      genres: this.state.genre,
    };
    this.props.onAddMovie(movie);
  };

  handleChangeText = (e) => {
    const input = e.currentTarget;
    const { value, name } = input;
    this.setState({
      [name]: value,
    });
  };

  handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
      this.setState({
        photo: base64,
      });
    })
  };

  handleChangeRating = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      rating: value,
    });
  };

  handleChangeGenre = (e) => {
    const { value } = e.currentTarget;
    let newGenre;

    if (this.state.genre.includes(value)) {
      newGenre = this.state.genre.filter(el => el !== value);
    } else {
      newGenre = [...this.state.genre, value];
    }

    this.setState({
      genre: newGenre,
    });
  };

  handleChangeActors = (e) => {
    const { value } = e.currentTarget;
    const newActors = typeof value === "string" ? [value] : value;
    this.setState({
      actors: newActors,
    })
  };

  render() {
    const {
      title,
      description,
      photo,
      rating,
      genre,
      actors,
    } = this.state;

    return (
      <div className="movie-form">
        <form onSubmit={this.handleSubmit} className="movie-form__cont">

          <div className="movie-form__row">
            <label htmlFor="movie-form-title">Title:</label>
            <input value={title} onChange={this.handleChangeText} type="text" name="title" id="movie-form-title"/>
          </div>

          <div className="movie-form__row">
            <label htmlFor="movie-form-description">Description:</label>
            <textarea value={description} onChange={this.handleChangeText} name="description" id="movie-form-description"/>
          </div>

          <div className="movie-form__row">
            <label htmlFor="movie-form-description">Photo:</label>
            {photo.length > 0 && (
              <img style={{
                width: '300px',
                height: '200px',
                objectFit: 'contain',
              }} src={photo} alt=""/>
            )}
            <input type="file" accept=".jpeg,.png" onChange={this.handleChangePhoto} />
          </div>

          <div className="movie-form__row">
            <span>Rating:</span>
            <div>
              {RATINGS.map((ratingEl) => (
                <label key={ratingEl.value}>
                  <input
                    checked={rating === ratingEl.value}
                    type="radio"
                    value={ratingEl.value}
                    onChange={this.handleChangeRating}
                  /><span>{ratingEl.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="movie-form__row">
            <span>Genres:</span>
            <div>
              {GENRES.map((genresEl) => (
                <label key={genresEl.value}>
                  <input
                    checked={genre.indexOf(genresEl.value) !== -1}
                    type="checkbox"
                    value={genresEl.value}
                    onChange={this.handleChangeGenre}
                  /><span>{genresEl.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="movie-form__row">
            <span>Actors:</span>
            <div>
              <select value={actors} multiple onChange={this.handleChangeActors}>
                {ACTORS.map((actorsEl) => (
                  <option key={actorsEl.id} value={actorsEl.id}>{actorsEl.name}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit">Create movie</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;

MovieForm.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {};
