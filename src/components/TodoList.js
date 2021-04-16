import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo__list">
        {Object.keys(this.props.todos).map((key) => (
          <TodoItem
            key={key}
            index={key}
            text={this.props.todos[key].text}
            complete={this.props.todos[key].complete}
            toggleComplete={this.props.toggleComplete}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object,
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default TodoList;
