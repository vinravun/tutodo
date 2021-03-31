import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.text}
        <button type="button" onClick={() => this.props.deleteTodo(this.props.index)}>
          &times;
        </button>
      </li>
    );
  }
}
TodoItem.propTypes = {
  text: PropTypes.string,
  deleteTodo: PropTypes.func,
  index: PropTypes.string,
};
export default TodoItem;
