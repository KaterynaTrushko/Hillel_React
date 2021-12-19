import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { makeMovies, makeMovie } from "../data";
import { MoviesList } from "./MoviesList";
import { MovieForm } from "./MovieForm";

const movies = makeMovies();

export class MoviesPage extends PureComponent {
  state = {
    items: movies,
    isEditing: false,
  };

  addMovie = (movie) => {
    console.log('-----------------', movie);
    this.setState({
      items: [
        movie,
        ...this.state.items,
      ]
    });
  };

  removeMovie = (movieID) => {
    this.setState({
      items: this.state.items.filter((movie) => movie.id !== movieID),
    });
  };

  addRandomMovie = () => {
    this.addMovie(makeMovie())
  };

  render() {
    const { items, isEditing } = this.state;

    return (
      <div className="movies-page">
        <div className="movies-page__list">
          <div className="movies-page__cations">
            <button onClick={this.addRandomMovie}>Add a random movie</button>
            <button onClick={() => this.setState({ isEditing: !isEditing })}>
              {isEditing ? 'Cancel' : 'Add a movie'}
            </button>
          </div>
          {isEditing && (
            <MovieForm
              onAddMovie={this.addMovie}
            />
          )}
          <MoviesList
            items={items}
            onRemoveMovie={this.removeMovie}
          />
        </div>
      </div>
    );
  }
}

export default MoviesPage;

MoviesPage.propTypes = {};

MoviesPage.defaultProps = {};
