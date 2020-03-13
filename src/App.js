import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos:[
      {id:1, content: 'buy some milk'}, 
      {id:2, content:'play with your kids'}
    ]
  }  


  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    })
  }
  
  AddItem = (todo) =>{
    todo.id = Math.random()
    const todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
    
  }


  render() {
    return (

      <div className=" container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} del= {this.deleteTodo}/>
        <AddTodo AddItem = {this.AddItem} />
      </div>

    )
      
  }
}


export default App;
