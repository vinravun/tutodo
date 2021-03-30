import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}
TodoItem.propTypes = {
  text: PropTypes.string,
};
export default TodoItem;
