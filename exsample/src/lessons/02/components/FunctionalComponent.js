import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function Timer(props) {
  const { test, hello, children } = props;
  const [value, setValue] = useState(new Date());

  const tick = () => {
    setValue(new Date());
  };

  useEffect(() => {
    console.log('functional component did mount');
  }, []);

  return (
    <div className="time">
      <div className="timer__cont">
        <div className="timer__message">
          {children}
        </div>
        <div className="timer__hello">
          func:
          {hello}
        </div>
      </div>
    </div>
  );
}

Timer.propTypes = {};
