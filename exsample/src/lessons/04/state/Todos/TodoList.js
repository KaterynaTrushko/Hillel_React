import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem";

export class TodoList extends Component {
  render() {
    let { items } = this.props;

    return (
      <div className="todos__list">
        {items.map((todo) => (
          <TodoItem key={todo.id}
            todo={todo}
          ></TodoItem>
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
};

TodoList.defaultProps = {
  items: [],
};
