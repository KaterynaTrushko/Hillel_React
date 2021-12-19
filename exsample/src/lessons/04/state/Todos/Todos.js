import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodoList } from "./TodoList";
import { TodosFilters } from "./TodosFilters";
import { todos } from "./data";

export class Todos extends Component {
  state = {
    isDone: false,
    isUrgent: false,
    search: '',
  };

  handleChangeIsDone = (newIsDone) => {
    this.setState({
      isDone: newIsDone,
    })
  };

  handleChangeIsUrgent = (newIsUrgent) => {
    this.setState({
      isUrgent: newIsUrgent,
    })
  };

  handleChangeSearch = (newSearch) => {
    this.setState({
      search: newSearch,
    })
  };

  render() {
    const { isDone, isUrgent, search } = this.state;
    const todosToRender = todos.filter((el) => {
      if (isDone && el.isDone === false) return false;
      if (isUrgent && el.isUrgent === false) return false;
      if (el.title.toLowerCase().indexOf(search.toLowerCase()) < 0) return false;
      return true;
    });

    return (
      <div className="todos">
        <div className="todos__filters">
          <TodosFilters
            isDone={isDone}
            isUrgent={isUrgent}
            search={search}
            onChangeIsDone={this.handleChangeIsDone}
            onChangeIsUrgent={this.handleChangeIsUrgent}
            onChangeSearch={this.handleChangeSearch}
          />
        </div>
        <div className="todos__items">
          <TodoList
            items={todosToRender} />
        </div>
      </div>
    );
  }
}

Todos.propTypes = {};

Todos.defaultProps = {};
