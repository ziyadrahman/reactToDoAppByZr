import React from 'react'


function ToDoContainer({index,todo,deleteTodo,
  toggleComplete
}) {
  return (
    <div className='toDoContainer'>
      

      {/* Apply strikethrough if todo is completed */}
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input 
        type="checkbox" 
        onChange={() => toggleComplete(index)} 
        checked={todo.completed} 
      />
        {todo.text}
       
        <input type="button"
        className="deleteBtn"
        onClick={()=>deleteTodo(index)}
        value="Delete Task" />
        </p>

    </div>
  )
}

export default ToDoContainer