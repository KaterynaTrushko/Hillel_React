import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class UncontrolledField extends PureComponent {
  render() {
    return (
      <div className="">
        <input type="text"/>
      </div>
    );
  }
}

UncontrolledField.propTypes = {};

UncontrolledField.defaultProps = {};
