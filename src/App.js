import React,{useState} from 'react';
import './App.css';
import ToDosContainer from './Components/ToDosContainer';
import ToDoContainer from './Components/ToDoContainer';








function App() {

  const [toDo,setToDo]=useState("");
  const [toDos,setToDos]=useState([]);

  const deleteTodo = (indexToDelete) => {
    setToDos(toDos.filter((_, index) => index !== indexToDelete));
  };
  const toggleComplete = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  };
  const addTodo = () => {
    const currentDateTime = new Date().toLocaleString(); // Get current date and time
    setToDos([{ text: toDo, completed: false, date: currentDateTime }, ...toDos]);
    setToDo(''); // Clear input after adding task
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo(); // Trigger addTodo when Enter is pressed
    }
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <div className='addTaskSection'>
      <input type='text'
       value={toDo}  // Controlled input
       onChange={(event)=> setToDo(event.target.value)}
       onKeyDown={handleKeyDown}
      
        
      
      
      placeholder='Add Task'/>


  {/* Show button only when text is entered */}
  {toDo.trim() !== "" && (
          <input 
            type='button' 
            className='addBtn'
            onClick={addTodo}
            value="Add Task" 
          />
        )}
      </div>
      <ToDosContainer toDos={toDos} deleteTodo={deleteTodo}  toggleComplete={toggleComplete}/>
      

    </div>
  );
}

export default App;
