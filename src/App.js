import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList
  };

  handleToggleComplete = (event, todoIdToDelete) => {
    //create copy of data to update
    const newTodos = this.state.todos.slice();
    //modify copy
    const newNewTodos = newTodos.map(todo=> {
      //find todo to modify
      if (todo.id === todoIdToDelete) {
        //then change its completed value from false to true
      todo.completed = !todo.completed;
      }
      return todo;

    })

  }
  handleAddTodo = event => {
    if (event.key === 'Enter') {
      const newTodo = {
        userId:1,
        id: Math.floor(Math.random() * 1000000)
      }
    }
  }
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={this.handleAddTodo}
            autofocus
          />
        </header>
        <TodoList
        todos={this.state.todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange = {event => this.props.handleToggleComplete(event, this.props.id)}
          />
          <label>{this.props.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            handleToggleComplete={this.props.handleToggleComplete}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
