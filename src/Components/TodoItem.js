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
      lineHeight: '1.7em',
      padding: '0 10px',
      cursor: 'pointer'
  }
  render() {
    const {
        todo: {
            id,
            title,
            completed
        },
        removeItem,
        markAsCompleted
    } = this.props
    return (
      <div style={this.getStyle()}>
        <input style={{display:'inline-block',marginRight:'5px'}} id={id} type="checkbox" checked={completed?'checked':''} onChange={markAsCompleted.bind(this, id)} />
        <label htmlFor={id}>{title}</label>
        <button style={this.buttonStyle} onClick={removeItem.bind(this,id)}>x</button>
      </div>
    )
  }
}
