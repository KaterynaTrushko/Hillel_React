import React from 'react';
import PropTypes from 'prop-types';

const list = [
  "orange",
  "apple",
  "banana"
];

const list2 = [
  {
    id: 1,
    name: 'orange',
    description: 'lorem',
  },
  {
    id: 2,
    name: 'apple',
    description: 'lorem',
  },
  {
    id: 3,
    name: 'banana',
    description: 'lorem',
  },
];

export function Rendering() {
  const [show, setShow] = React.useState(false);
  const isLoading = false;

  const greetingButton = (
    <button disabled={true}>
      <span>Hello, {2 / 33}</span>
    </button>
  );

  const readyToRender = "<p><span>Hello </span><b>World</b></p>";

  const renderButton = (text = '', props = {}) => {
    return (
      <button {...props}>{text}</button>
    );
  };

  const renderSomeCondition = (isShow = false) => {
    if (isShow) {
      return (
        <span>show</span>
      );
    }

    return (
      <span>hide</span>
    );
  }

  let p = ``;

  return isLoading ? 'Loading...' : (
    <div className="red" id={'test' + '1' + '2'} data-test="" aria-atomic="">
      <button disabled>Click me</button>
      {greetingButton}
      {renderButton('hello', { className: 'hello' })}
      {'string'}
      {list.map((fruit, i) => (
        <div key={i}>
          <span>{fruit}</span>
        </div>
      ))}
      {['1', '2', 3]}
      {list2.map((fruit, i) => (
        <div key={fruit.id}>
          <span>{fruit.name}, {fruit.description}</span>
        </div>
      ))}
      <div>
        <span>null: {null}</span>
        <span>false: {false}</span>
        <span>undefined: {undefined}</span>
        {show && (
          <span>hello!</span>
        )}
        {show ? (
          <span>show is true</span>
        ) : (
          <span>show is false</span>
        )}
        <button onClick={() => setShow(!show)}>show or hide</button>
      </div>
      <div>
        <h3>html:</h3>
        <div dangerouslySetInnerHTML={{__html: readyToRender}} />
      </div>
    </div>
  );
}

Rendering.propTypes = {};
