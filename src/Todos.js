import React from 'react';

const mytodo = ({todos, del}) =>{

  const todoList = todos.map(todo => {
    return(
      <div className="collection-item" key={todo.id}>
        <span onClick={() => {del(todo.id)}}>{todo.content}</span> 
      </div>
    )
  })



  return(

    <div className="collection">
      {todoList}
    </div>
  )
}



export default mytodo;