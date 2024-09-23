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

  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <div className='addTaskSection'>
      <input type='text' onChange={

        (event)=> setToDo(event.target.value)
      
        
      }
      
      placeholder='Add Task'/>


      <input type='button' 
      className='addBtn'
      onClick={()=>{
        setToDos([{text:toDo,completed:false},...toDos]);
        console.log([toDo,...toDos]);
        
      }
   
        
      }
      value="Add Task" />
      </div>
      <ToDosContainer toDos={toDos} deleteTodo={deleteTodo}  toggleComplete={toggleComplete}/>
      

    </div>
  );
}

export default App;
