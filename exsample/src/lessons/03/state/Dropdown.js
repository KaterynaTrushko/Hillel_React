import React, { Component } from 'react';
import PropTypes from 'prop-types';

const options = [
  { label: 'Orange', value: 1, },
  { label: 'Banana', value: 2, },
  { label: 'Tomato', value: 3, },
];

class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     isOpen: false,
  //     value: null,
  //   };
  // }

  handleToggle = () => {
    // this.state.isOpen = false; // НИКОГДА!!! ПОКУСАЮ!!!

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;

    // this.setState((state) => { // СОВЕСМ НИКОГДА!!!
    //   return {
    //     isOpen: !state.isOpen,
    //   }
    // });

    return (
      <div className="dropdown">
        <button onClick={this.handleToggle} className="dropdown__button">{isOpen ? 'Close' : 'Open'}</button>
        {isOpen && (
          <div className="dropdown__menu">
            <ul>
              {options.map(option => (
                <li key={option.value}>{option.label}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {};

Dropdown.defaultProps = {};
