import React, { Component } from 'react'
import Todo from "./Todo"
import TodoForm from './TodoForm'

 class TodoList extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        todo:[]
     }
   }
   create = (newTodo) => {
     this.setState({
       todo:[...this.state.todo, newTodo]
     })
   }
   remove = (id) => {
     this.setState({
       todo: this.state.todo.filter(t => t.id !== id)
     })
   }
   update = (id, updatedTask)=>{
     const updatedTodos = this.state.todo.map(t =>{
       if(t.id === id){
         return{
           ...t, task:updatedTask
         }
       }
       return t
     })
     this.setState({todo: updatedTodos})
   }
  render() {
    const todos = this.state.todo.map(todo =>{
      return <Todo key= {todo.id} 
      id = {todo.id} 
      task={todo.task} 
      removeTodo={this.remove}
      updateTodo = {this.update}
      />
    })
    return (

      <div className="row col-md-6 mx-auto">
      <div className="card card-body text-center mt-5 pb-3">
      <h1 className="heading display-5 pb-3">Todo List!!</h1>
      <TodoForm create={this.create}/>
        <ul className="list-group list-group-flush">

        <li className="list-group-item">{todos} </li>
        </ul>
        </div>
      </div>
    )
  }
}

export default TodoList
