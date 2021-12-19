import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RenderCounter extends Component {
  static = {
    isOpen: false
  };

  rendersCount = 0;

  render() {
    this.rendersCount += 1;

    return (
      <div className="">
        Renders' count: {this.rendersCount}
        <button onClick={
          () => this.setState({ isOpen: !this.isOpen })
        }>make a new render</button>
      </div>
    );
  }
}

export default RenderCounter;

RenderCounter.propTypes = {};

RenderCounter.defaultProps = {};
