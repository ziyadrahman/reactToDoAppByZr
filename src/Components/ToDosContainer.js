import React from 'react'
import ToDoContainer from './ToDoContainer'


function ToDosContainer({toDos,deleteTodo}) {
  return (
    <div className='toDosContainer'>
     {
        toDos.map((todo,index)=>(
            <ToDoContainer 
            key={index} 
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            />
        ))
     }



       
        </div>
  )
}

export default ToDosContainer