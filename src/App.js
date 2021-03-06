import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList.js";


class App extends Component {
  state = {
    todos: todosList,
    value: ""
  };
  handleDelete = todoIdToDelete => {
    const newTodoList = this.state.todos.filter(
      todo => todo.id !== todoIdToDelete);
    this.setState({ todos: newTodoList });
  };
  handleCreate = (event) => {
    if (event.key === 'Enter') {
      const newTodoList = this.state.todos.slice();
      newTodoList.push({
        userId: 1,
        id: Math.floor(Math.random()*1000000),
        title: this.state.value,
        completed: false
      });
      this.setState({ todos: newTodoList, value: "" });
    }
  };
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  handleToggle = todoIdToToggle => {
    const newTodoList = this.state.todos.map(todo => {
      if (todo.id === todoIdToToggle) {
        const newTodo = {...todo };
        newTodo.completed = !newTodo.completed
        return newTodo;
      }
      return todo;
    });
    this.setState({todos: newTodoList});
  };
  handleClearClick = () => {
    let todos = this.state.todos;
    todos = todos.filter(a => !a.completed);
    this.setState({ todos: todos });
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus
            onKeyDown={this.handleCreate}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
        <TodoList
        handleToggle={this.handleToggle}
        handleDelete = {this.handleDelete}
        todos={this.state.todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button onClick={this.handleClearClick} className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
