import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo__list">
        {Object.keys(this.props.todos).map((key) => (
          <TodoItem key={key} index={key} text={this.props.todos[key]} deleteTodo={this.props.deleteTodo} />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object,
  deleteTodo: PropTypes.func,
};

export default TodoList;
