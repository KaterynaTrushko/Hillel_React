import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MoviesItem } from "./MoviesItem";

export class MoviesList extends PureComponent {
  render() {
    const { items, onRemoveMovie } = this.props;

    return (
      <div className="movies-list">
        <div className="movies-list__cont">

          {items.map(el => (
            <div key={el.id} className="movies-list__el">
              <MoviesItem
                onRemoveMovie={onRemoveMovie}
                movie={el}
              />
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default MoviesList;

MoviesList.propTypes = {
  items: PropTypes.array,
  onRemoveMovie: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  items: [],
};
