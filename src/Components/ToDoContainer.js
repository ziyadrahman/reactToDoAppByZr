import React from 'react'

function ToDoContainer({todo}) {
  return (
    <div className='toDoContainer'>
        <p className='toDoText'>
        {todo}
        </p>

    </div>
  )
}

export default ToDoContainer