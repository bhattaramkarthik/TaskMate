
import './ShowTask.css';

function ShowTask({tasks,setTasks,selectedTask,setSelectedTask}){

    function deleteAll(){
        setTasks([]);
    }

    function handleEdit(id){
        const selectedTask = tasks.find((task)=>task.id === id);
        setSelectedTask(selectedTask);
    }

    function handleDelete(id){
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="tasksSection">
            <div style={{paddingLeft: '25px',display:'inline-block'}}>Todos : {tasks.length}</div>
            <div className="deleteAllClass" onClick={deleteAll}>Delete All</div>
            <div className="tasksListDiv">

                {tasks.length === 0 && <div style={{textAlign:'center',padding:'60px'}}>
                      There are no Tasks
                    </div>
                }
                 {tasks.length > 0 && tasks.map((task) => (
                    <div key={task.id} className="tasksClass">
                        <p>
                            <span>Task:</span> <br/>
                            <span>{task.name}</span><br/>
                            <span>{task.date}</span>
                        </p>
                        <span className="editClass" onClick = {() => handleEdit(task.id)}>Edit</span>
                        <span className="deleteClass" onClick={() => handleDelete(task.id)}>Delete</span>
                    </div>
                 ))     
                }
                
            </div>
        </div>
    )
}

export default ShowTask;