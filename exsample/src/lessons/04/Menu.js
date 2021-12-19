import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="">
        <button
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          // onClick={this.handleClick}
        >
          {this.state.isOpen ? 'Hide' : 'Show'}
        </button>
        {this.state.isOpen && (
          <div>
            <ul>
              <li>Home page</li>
              <li>Contacts page</li>
              <li>Login</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;

Menu.propTypes = {};

Menu.defaultProps = {};
