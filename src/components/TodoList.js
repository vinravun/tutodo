import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo__list">
        {Object.keys(this.props.todos).map((key) => (
          <TodoItem key={key} text={this.props.todos[key]} />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object,
};

export default TodoList;
