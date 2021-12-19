import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class ControlledTextField extends PureComponent {
  state = {
    value: '',
    error: null,
  };

  handleChange = (e) => {
    let value = e.currentTarget.value;

    this.setState({
      value: `${value}🙀`,
      error: 'Some error'
    })
  };

  render() {
    const { value, error } = this.state;

    return (
      <div className="">
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        {error && (
          <span style={{ color: 'red' }}>{error}</span>
        )}
      </div>
    );
  }
}

export default ControlledTextField;

ControlledTextField.propTypes = {};

ControlledTextField.defaultProps = {};
