import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Timer extends Component {
  state = {
    value: new Date(),
  };

  tick() {
    this.setState({
      value: new Date(),
    });
  }

  componentDidMount() {
    console.log('class component did mount');
  }

  render() {
    const { children, test, hello } = this.props;

    return (
      <div className="timer">
        <div className="timer__cont">
          <div className="timer__message">
            {children}
          </div>
          <div className="timer__hello">
            class:
            {this.props.hello}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

Timer.propTypes = {};

Timer.defaultProps = {};
