import React, { Component } from 'react';
import PropTypes from 'prop-types';

const options = [
  { label: 'Orange', value: 'Orange', },
  { label: 'Banana', value: 'Banana', },
  { label: 'Tomato', value: 'Tomato', },
];

class Checkboxes extends Component {
  state = {
    checked: {
      Tomato: true,
      Orange: false,
    },
  }

  handleSelect = (value) => {
    this.setState({
      checked: {
        ...this.state.checked,
        [value]: !this.state.checked[value]
      }
    });
  }

  render() {
    return (
      <div className="">
        {options.map((option) => (
          <button key={option.value} onClick={
            () => this.handleSelect(option.value)
          }>{option.label} {this.state.checked[option.value] && 'Checked'}</button>
        ))}
      </div>
    );
  }
}

export default Checkboxes;

Checkboxes.propTypes = {};

Checkboxes.defaultProps = {};
