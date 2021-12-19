import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MoviesPage } from "./MoviesPage";

export class Lesson extends PureComponent {
  render() {
    return (
      <div className="">
        <MoviesPage />
      </div>
    );
  }
}

export default Lesson;

Lesson.propTypes = {};

Lesson.defaultProps = {};
