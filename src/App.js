import React,{useState} from 'react';
import './App.css';
import ToDosContainer from './Components/ToDosContainer';
import ToDoContainer from './Components/ToDoContainer';








function App() {

  const [toDo,setToDo]=useState("");
  const [toDos,setToDos]=useState([]);

  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <div className='addTaskSection'>
      <input type='text' onChange={

        (event)=> setToDo(event.target.value)
      
        
      }
      
      placeholder='Add Task'/>


      <input type='button' 
      onClick={()=>{
        setToDos([toDo,...toDos]);
        console.log([toDo,...toDos]);
        
      }
   
        
      }
      value="Add Task" />
      </div>
      <ToDosContainer toDos={toDos}/>
      

    </div>
  );
}

export default App;
