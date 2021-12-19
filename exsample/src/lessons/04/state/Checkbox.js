import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Checkbox extends Component {
  state = {
    checked: false,
  };

  render() {
    let { children } = this.props;
    let { checked } = this.state;

    return (
      <button
        onClick={() => this.setState({ checked: !checked })}
      >
        {checked ? '✅' : '🙀'} {children}
      </button>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {};

Checkbox.defaultProps = {};
