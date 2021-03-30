import React from 'react';
import TodoList from './TodoList';
import '../App.scss';

class App extends React.Component {
  state = {
    todos: {},
  };

  inputRef = React.createRef();

  addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = this.inputRef.current.value;
    // a copy of the existing state
    const { todos } = this.state;
    // eslint-disable-next-line no-console
    console.log(todos);
    // add new todo to todos variable
    todos[`todo${Date.now()}`] = newTodo;
    // set new todos object to state
    this.setState({ todos });
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="todo">
        <form className="todo__input" onSubmit={this.addNewTodo}>
          <input type="text" placeholder="whajyu gotta do" ref={this.inputRef} required />
          <button type="submit">+</button>
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
