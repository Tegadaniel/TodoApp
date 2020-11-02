import React, { Component } from 'react'

class Todo extends Component {
  handleRemove = (evt) =>{
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{this.props.task}</li>

        <button 
        onClick = {this.handleRemove}
        className="btn btn-primary btn-sm">Delete Task</button>
          
        <hr/>
        </ul>

      </div>
    )
  }
}

export default Todo
