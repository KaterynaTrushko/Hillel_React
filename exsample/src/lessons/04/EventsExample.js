import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EventsExample extends Component {
  handleClick = (e) => {
    console.log({
      target: e.target,
      currentTarget: e.currentTarget,
      nativeEventTarget: e.nativeEvent.target,
      nativeEventCurrentTarget: e.nativeEvent.currentTarget,
    });
  }

  render() {
    return (
      <div className="" onClick={this.handleClick}>
        <div>
          <div>
            {/* button.addEventListener() - реакт этого не делает */}
            <button>Menu item 1</button>
            <button>Menu item 2</button>
            <button>Menu item 3</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsExample;

EventsExample.propTypes = {};

EventsExample.defaultProps = {};
