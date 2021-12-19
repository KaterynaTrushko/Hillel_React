import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Timer extends PureComponent {
  state = {
    counter: 0
  };

  intervalID = null;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="">
        Counter is: {counter}
      </div>
    );
  }
}

export default Timer;

Timer.propTypes = {};

Timer.defaultProps = {};
