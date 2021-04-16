import React from 'react';
import TodoList from './TodoList';
import '../App.scss';

class App extends React.Component {
  state = {
    todos: {},
  };

  todoInputRef = React.createRef();

  componentDidMount() {
    const localStorageRef = localStorage.getItem('todos');
    if (localStorageRef) {
      this.setState({ todos: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      text: this.todoInputRef.current.value,
      complete: false,
    };
    const { todos } = this.state;
    todos[`todo${Date.now()}`] = newTodo;
    this.setState({ todos });
    e.currentTarget.reset();
  };

  toggleComplete = (key) => {
    const { todos } = this.state;
    todos[key].complete = !todos[key].complete;
    console.log(todos);
    this.setState({ todos });
  };

  deleteTodo = (key) => {
    const { todos } = this.state;
    delete todos[key];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo">
        <form className="todo__input" onSubmit={this.addNewTodo}>
          <input type="text" placeholder="whajyu gotta do?" ref={this.todoInputRef} required />
          <button type="submit">+</button>
        </form>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
