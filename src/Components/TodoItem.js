import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  }
  getStyle = () => {
      return {
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through':'none'
      }
  }
  buttonStyle = {
      float: 'right',
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markAsCompleted.bind(this, this.props.todo.id)} />
        <p>{this.props.todo.title}</p>
        <button style={this.buttonStyle} onClick={this.props.removeItem.bind(this,this.props.todo.id)}>x</button>
      </div>
    )
  }
}
