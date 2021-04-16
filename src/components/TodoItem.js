import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={this.props.complete ? 'completed-task' : null}>
        <label htmlFor={this.props.index}>{this.props.text}</label>
        <input
          type="checkbox"
          id={this.props.index}
          value={this.props.text}
          onChange={() => this.props.toggleComplete(this.props.index)}
        />
        <div className="button-group">
          <button type="button" onClick={() => this.props.deleteTodo(this.props.index)}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string,
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  index: PropTypes.string,
  complete: PropTypes.bool,
};
export default TodoItem;
