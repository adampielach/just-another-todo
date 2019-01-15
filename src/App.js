import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todo from './Components/Todo';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';

import './index.css';
import Axios from 'axios';
class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  // Will be able to add just one task with unique ID as this is the API restriction
  addTask = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }))
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
    .then((res) => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== itemId)]
    }))
    .then(res => console.log(res))
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTask={this.addTask}/>
              <Todo data={this.state.todos} markAsCompleted={this.markAsCompleted} removeTodo={this.removeItem}></Todo>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
