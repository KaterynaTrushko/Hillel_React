import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Dummy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      // ...props // нельзя!
    };

    // this.setState({}) // нельзя!
    // fetch() // нельзя

    console.log('---> Dummy: constructor');
  }

  render() {
    console.log('---> Dummy: render');

    return (
      <div className="">

      </div>
    );
  }

  componentDidMount() {
    console.log('---> Dummy: componentDidMount');
  }
}

export default Dummy;

Dummy.propTypes = {};

Dummy.defaultProps = {};
