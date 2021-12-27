import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class TodosFilters extends PureComponent {
  handleChangeSearch = (e) => {
    let { onChangeSearch } = this.props;
    // let { currentTarget } = e;
    onChangeSearch(e.currentTarget.value);
  };

  render() {
    const {
      isDone,
      isUrgent,
      search,
      onChangeIsDone,
      onChangeIsUrgent,
    } = this.props;

    return (
      <div className="todos__filters">
        <label>
          <input
            onChange={() => onChangeIsDone(!isDone)}
            type="checkbox"
            checked={isDone}
          /> <span>Filter only done</span>
        </label>
        <label>
          <input
            onChange={() => onChangeIsUrgent(!isUrgent)}
            type="checkbox"
            checked={isUrgent}
          /> <span>Filter only urgent</span>
        </label>
        <div>
          <label>
            <input
              type="text"
              value={search}
              onChange={this.handleChangeSearch}/>
          </label>
        </div>
      </div>
    );
  }
}

export default TodosFilters;

TodosFilters.propTypes = {
  isDone: PropTypes.bool.isRequired,
  isUrgent: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  onChangeIsDone: PropTypes.func.isRequired,
  onChangeIsUrgent: PropTypes.func.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

TodosFilters.defaultProps = {};
