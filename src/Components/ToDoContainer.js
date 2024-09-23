import React from 'react';

function ToDoContainer({ index, todo, deleteTodo, toggleComplete }) {
  return (
    <div className='toDoContainer'>
      <div className="toDoContent">
        <input 
          type="checkbox" 
          onChange={() => toggleComplete(index)} 
          checked={todo.completed} 
        />
        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </p>
      </div>

      {/* Delete icon from FontAwesome */}
      <i 
        className="fas fa-trash deleteIcon" 
        onClick={() => deleteTodo(index)}
      ></i>
    </div>
  );
}

export default ToDoContainer;
