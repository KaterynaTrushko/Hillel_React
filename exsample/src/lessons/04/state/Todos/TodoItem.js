import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    let { todo } = this.props;

    return (
      <div key={todo.id} style={{ border: '1px solid pink' }}>
        <h4>{todo.title}</h4>
        <p style={{ fontSize: '12px' }}><b>Status: </b> {todo.isDone ? '✅' : '🙀'}</p>
        <p style={{ fontSize: '12px' }}><b>Urgent: </b> {todo.isUrgent ? 'yes' : 'no'}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    isUrgent: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

TodoItem.defaultProps = {};
