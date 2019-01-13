import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class Todo extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  render() {
    return (
      this.props.data.map(todo => {
         return <TodoItem key={todo.id} todo={todo} markAsCompleted={this.props.markAsCompleted} removeItem={this.props.removeTodo}/>
      })
    )
  }
}
