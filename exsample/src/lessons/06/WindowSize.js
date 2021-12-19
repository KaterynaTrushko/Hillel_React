import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

export class WindowSize extends PureComponent {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   const currentProps = this.props;
  //   const currentState = this.state;
  //   console.log('---> WindowSize: shouldComponentUpdate', {
  //     currentProps,
  //     currentState,
  //     nextProps,
  //     nextState,
  //   });
  //   return true;
  // }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      id: props.id,
    }
  }

  render() {
    console.log('---> WindowSize: render');

    const { width, height } = this.state;

    return (
      <div className="">
        <div><b>Width: </b> {width}</div>
        <div><b>Height: </b> {height}</div>
      </div>
    );
  }

  handleResize = () => {
    console.log('---> WindowSize: handleResize');

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  };

  componentDidMount() {
    console.log('---> WindowSize: componentDidMount');
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('---> WindowSize: getSnapshotBeforeUpdate');
    return {
      hello: 'from Vasya'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('---> WindowSize: componentDidUpdate', {
      prevProps,
      prevState,
      state: this.state,
      props: this.props,
      snapshot,
    });
  }

  componentWillUnmount() {
    console.log('---> WindowSize: componentWillUnmount');
    window.removeEventListener('resize', this.handleResize);
  }
}

export default WindowSize;

WindowSize.propTypes = {};

WindowSize.defaultProps = {};
