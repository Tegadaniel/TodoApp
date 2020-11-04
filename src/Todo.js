import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       editing: false,
       task: this.props.task
    }
  }
  
  handleRemove = (evt) =>{
    this.props.removeTodo(this.props.id);
  }
  toggleForm = () =>{
    let toggle = this.state.editing;
    this.setState({
      editing: !toggle
    })
  }
  handleUpdate = (evt)=>{
    evt.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({
      editing: false
    })
  }
  handleChange = (evt) =>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    let result
    if(this.state.editing){
      result = (
        <div className="form-group">
          <form onSubmit ={this.handleUpdate}>
            <input type = "text" 
             placeholder = "Enter desire change" 
             className = "form-control  mb-4"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button  className="btn btn-primary">Update</button>
          </form>
        </div>
      )
    }
    else{
      result = (
        <div>

        <ul className="list-group ">
          <li className="list-group-item  ">
          <div className="float-left font-italic text-capitalize">
          {this.props.task}
          </div>
  
          <span className="fa-li fa-stack float-right">
          <i className="fas fa-square fa-stack-2x"></i> 
          <i  onClick = {this.handleRemove} className="fas fa-trash-alt fa-stack-1x fa-inverse "></i> </span>
          
          <span className="fa-li fa-stack float-right">
          <i className="fas fa-square fa-stack-2x"></i> 
          <i onClick = {this.toggleForm} className="far fa-edit fa-stack-1x fa-inverse"></i>
          </span>
          </li>
            
          <hr/>
          </ul>
  
        </div>
        
      )
    }
    return (
      result
    )
  }
}

export default Todo
