import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

export class UncontrolledFields extends PureComponent {
  firstNameInput = null;
  lastNameInput = createRef();

  componentDidMount() {
    console.log('-----------------', this.lastNameInput);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let firstName = this.firstNameInput.value;
    let lastName = this.lastNameInput.current.value;
    console.log('handleSubmit', {
      firstName: firstName,
      lastName,
    })
  };

  render() {
    return (
      <div className="">
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            <div>First Name: <input
              ref={(node) => this.firstNameInput = node}
              type="text" name="firstName"/></div>
          </label>
          <label>
            <div>Last Name: <input
              type="text"
              ref={this.lastNameInput}
              name="lastName"/></div>
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledFields;

UncontrolledFields.propTypes = {};

UncontrolledFields.defaultProps = {};
