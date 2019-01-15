import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
    static propTypes = {
        addTask: PropTypes.func.isRequired,
    }
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit =(e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({title:''})
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input 
                type="text" 
                placeholder="New task"
                style={{flex:'10', padding:'5px'}}
                value={this.state.title}
                onChange={this.onChange}
                />
            <button 
                type="submit"
                style={{flex: 1}}
                className='btn'
                >Add Todo</button>
        </form>
      </div>
    )
  }
}
