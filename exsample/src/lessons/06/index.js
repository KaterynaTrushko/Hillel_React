import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dummy } from "./Dummy";
import { SWPeople } from "./SWPeople";
import { WindowSize } from "./WindowSize";

export class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowSize: false,
      peopleID: 1,
    };

    console.log('---> Lesson: constructor');
  }

  render() {
    console.log('---> Lesson: render');
    const { showWindowSize, peopleID } = this.state;

    return (
      <div className="">
        {/*<Dummy />*/}

        <SWPeople peopleID={peopleID} />
        {/*<button onClick={() => this.setState({ peopleID: 1 })}>Hero 1</button>*/}
        {/*<button onClick={() => this.setState({ peopleID: 2 })}>Hero 2</button>*/}
        {/*<button onClick={() => this.setState({ peopleID: 3 })}>Hero 3</button>*/}

        {showWindowSize && (
          <WindowSize />
        )}
        <button onClick={() => this.setState({ showWindowSize: !showWindowSize })}>{showWindowSize ? 'Hide' : 'Show'} WindowSize</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('---> Lesson: componentDidMount');
  }
}

export default Lesson;

Lesson.propTypes = {};

Lesson.defaultProps = {};
