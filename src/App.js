
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

function App() {
  const [tasks , setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [selectedTask,setSelectedTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  return (
    <div className="App">
      <Header/>
      <AddTask 
       tasks={tasks}
       setTasks={setTasks} 
       selectedTask={selectedTask} 
       setSelectedTask={setSelectedTask}
      />
      <ShowTask
       tasks={tasks}
       setTasks={setTasks} 
       selectedTask={selectedTask} 
       setSelectedTask={setSelectedTask}
      />
    </div>
  );
}

export default App;
