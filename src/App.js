import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Todo from './Components/Todo';
import Header from './Components/Header';

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
      <React.Fragment>
        <Header />
        <Todo data={this.state.todos} markAsCompleted={this.markAsCompleted} removeTodo={this.removeItem}></Todo>
      </React.Fragment>
    );
  }
}

export default App;
