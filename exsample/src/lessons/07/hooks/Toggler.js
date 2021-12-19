/**
 * @module @lessons/07/hooks/Toggler
 * @description The Toggler component.
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCustomState } from "./useCustomState";

// где-то внутри реакта
// let data = {
//   counter: 0,
// };

/**
 * @param {Object.<string, *>} props
 * @constructor
 */
export const Toggler = (props) => {
  const {
    counter, setCounter,
    isOpen, setIsOpen,
    search, setSearch,
  } = useCustomState();

  const inputRef = useRef(null);
  useEffect(() => {
    console.log('-----------------', inputRef);
  });

  // низзя!
  // if (true) {
  //   const [search, setSearch] = useState('');
  // }

  // низзя!
  // for (let i = 0; i < 10; i++) {
  //   const [search, setSearch] = useState('');
  // }

  // низзя!
  // const handleClick = () => {
  //   const [search, setSearch] = useState('');
  // };

  const { hello } = props;

  return (
    <div className="toggler">
      count: { counter }
      {isOpen && (
        <>
          <input ref={inputRef} value={search} onChange={(e) => setSearch(e.currentTarget.value)} type="text"/>
          <button onClick={() => setCounter(counter + 1)}>increase</button>
        </>
      )}
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'close' : 'open'}</button>
    </div>
  );
};

Toggler.propTypes = {

};

Toggler.defaultProps = {

};

