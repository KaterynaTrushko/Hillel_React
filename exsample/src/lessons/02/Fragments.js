import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  let { children } = props;

  return (
    <ul>{children}</ul>
  );
}

function ListElements() {
  return (
    <>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </>
  );
}

function ListExample() {
  return (
    <List>
      <ListElements />
    </List>
  );
}

export function Fragments() {
  return (
    <>
      <h1>hello!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est excepturi fugit qui recusandae vero. Assumenda facilis odio temporibus voluptatem.</p>
    </>
  );
}

Fragments.propTypes = {};
