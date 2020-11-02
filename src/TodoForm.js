import React, { Component } from 'react'
import nextId from "react-id-generator";

class TodoForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       task:""
    }
  }

  handleChange = (evt) =>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = (evt) =>{
    evt.preventDefault()
    this.props.create({...this.state,  id: nextId()})
    this.setState({
      task: ""
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
      <div className="form-group row">
        <div className="col-sm-10">
        <input type="text" placeholder = "Enter New Todo" 
        id="task" value={this.state.task} 
        required
        name= "task"  className = "form-control"
        onChange={this.handleChange}/>
        </div>
        </div>
        <div className="form-group">
        <button className="btn btn-dark " >Submit new todo</button>
        </div>
      </div>
      </form>
    )
  }
}

export default TodoForm
