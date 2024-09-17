import React from 'react'
import ToDoContainer from './ToDoContainer'


function ToDosContainer({toDos}) {
  return (
    <div className='toDosContainer'>
     {
        toDos.map((todo,index)=>(
            <ToDoContainer key={index} todo={todo}/>
        ))
     }



       
        </div>
  )
}

export default ToDosContainer