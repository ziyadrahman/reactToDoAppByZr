import React from 'react'
import ToDoContainer from './ToDoContainer'


function ToDosContainer({toDos,deleteTodo,toggleComplete}) {
  return (
    <div className='toDosContainer'>
     {
        toDos.map((todo,index)=>(
            <ToDoContainer 
            key={index} 
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete} 
            />
        ))
     }



       
        </div>
  )
}

export default ToDosContainer