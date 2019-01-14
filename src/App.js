import React, { Component } from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

import './index.css';
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Iron the laundry',
        completed: false
      },
      {
        id: 3,
        title: 'Cook the dinner',
        completed: false
      },
      {
        id: 4,
        title: 'Drink a coffee',
        completed: true
      }
    ]
  }
  addTask = (task) => {
    const newTodo = {
      id: uuid.v4(),
      title: task,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  markAsCompleted = (itemId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === itemId) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  removeItem = (itemId) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== itemId)]
    })
  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTask={this.addTask}/>
        <Todo data={this.state.todos} markAsCompleted={this.markAsCompleted} removeTodo={this.removeItem}></Todo>
      </div>
    );
  }
}

export default App;
