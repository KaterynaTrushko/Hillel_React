import React from 'react';
import PropTypes from 'prop-types';
import { Rendering } from "./Rendering";
import { Components } from "./Components";
import { Fragments } from "./Fragments";

export function Lesson() {
  return (
    <div className="lesson">
      {/*<Fragments />*/}
      {/*<Rendering />*/}
      <Components />
    </div>
  );
}

Lesson.propTypes = {};
