import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    markAsCompleted: PropTypes.func.isRequired
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
      backgroundColor: 'orange',
      border: 'none',
      color: '#f4f4f4',
      float: 'right',
  }
  render() {
    const {
        todo: {
            id,
            title
        },
        removeItem,
        markAsCompleted
    } = this.props
    return (
      <div style={this.getStyle()}>
        <input style={{display:'inline-block',marginRight:'5px'}}type="checkbox" onChange={markAsCompleted.bind(this, id)} />
        {title}
        <button style={this.buttonStyle} onClick={removeItem.bind(this,id)}>x</button>
      </div>
    )
  }
}
