import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const todo = {
  id: 1,
  isDone: false,
  title: 'Make HW #3',
};

const todos = [
  {
    id: 1,
    isDone: false,
    isUrgent: true,
    title: 'Make HW #1',
  },
  {
    id: 2,
    isDone: true,
    isUrgent: false,
    title: 'Make HW #2',
  },
  {
    id: 3,
    isDone: true,
    isUrgent: true,
    title: 'Test #1',
  },
  {
    id: 4,
    isDone: false,
    isUrgent: false,
    title: 'Test #2',
  },
];

export class Todolist extends PureComponent {
  state = {
    isDone: false,
    isUrgent: false,
    search: '',
  };

  handleChangeSearch = (e) => {
    let { currentTarget } = e;
    this.setState({
      search: currentTarget.value,
    });
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
          <label>
            <input
              onChange={() => this.setState({ isDone: !isDone })}
              type="checkbox"
              checked={isDone}
            /> <span>Filter only done</span>
          </label>
          <label>
            <input
              onChange={() => this.setState({ isUrgent: !isUrgent })}
              type="checkbox"
              checked={isUrgent}
            /> <span>Filter only urgent</span>
          </label>
          <div>
            <label>
              <input type="text" value={search} onChange={this.handleChangeSearch}/>
            </label>
          </div>
        </div>

        <div className="todos__list">
          {todosToRender.map((todo) => (
            <div key={todo.id} style={{ border: '1px solid pink' }}>
              <h4>{todo.title}</h4>
              <p style={{ fontSize: '12px' }}><b>Status: </b> {todo.isDone ? '✅' : '🙀'}</p>
              <p style={{ fontSize: '12px' }}><b>Urgent: </b> {todo.isUrgent ? 'yes' : 'no'}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todolist;

Todolist.propTypes = {};

Todolist.defaultProps = {};
