import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./ButtonExample";
import Dropdown from "./state/Dropdown";
import Checkboxes from "./state/Checkboxes";

export class Lesson extends Component {
  state = {
    id: null
  }

  handleClick = (id) => {
    this.setState({
      id
    });
  }

  render() {
    return (
      <div className="">
        Lesson 3
        {/*<p style={{*/}
        {/*  color: 'red',*/}
        {/*  marginBottom: '10px',*/}
        {/*}}>*/}
        {/*  Hello!*/}
        {/*  <Button color="blue" icon={(*/}
        {/*    <div><i>+</i></div>*/}
        {/*  )}>*/}
        {/*    <p>123</p>*/}
        {/*  </Button>*/}
        {/*</p>*/}
        {/*<p>ID: {this.state.id}</p>*/}
        {/*<Dropdown />*/}
        <Checkboxes />
      </div>
    );
  }
}

Lesson.propTypes = {};

Lesson.defaultProps = {};
