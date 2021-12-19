import React from 'react';
import PropTypes from 'prop-types';
import { Timer as FTimer } from "./components/FunctionalComponent";
import { Timer as CTimer } from "./components/ClassComponent";

export function Components() {
  return (
    <div className="">
      <FTimer test={1} hello={'world'}>
        <p>Lorem ipsum dolor sit.</p>
      </FTimer>
      <hr/>
      <CTimer test={1} hello={'world'}>
        <p>Lorem ipsum dolor sit.</p>
      </CTimer>
    </div>
  );
}

Components.propTypes = {};
