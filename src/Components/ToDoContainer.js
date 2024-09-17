import React from 'react'

function ToDoContainer({index,todo,deleteTodo}) {
  return (
    <div className='toDoContainer'>
      
        <p className='toDoText'>
        <input type="checkbox"
        onChange={()=>deleteTodo(index)} />

        {todo}
        </p>

    </div>
  )
}

export default ToDoContainer