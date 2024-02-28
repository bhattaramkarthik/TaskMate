import './AddTask.css';

function AddTask({ tasks, setTasks, selectedTask, setSelectedTask }) {

    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date();
        const timeLine = date.toLocaleDateString() + " , " + date.toLocaleTimeString();
        if (selectedTask.id) {
            const updatedTasksList = [];
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].id === selectedTask.id) {
                    const updatedTask = {
                        id: selectedTask.id,
                        name: e.target.taskName.value,
                        date: timeLine
                    };
                    updatedTasksList.push(updatedTask);
                } else {
                    updatedTasksList.push(tasks[i]);
                }
            }
            setTasks(updatedTasksList);
        } else {
            const newTask = {
                id: date.getMilliseconds(),
                name: e.target.taskName.value,
                date: timeLine
            }
            setTasks([...tasks, newTask]);
        }
        setSelectedTask({});
    }

    return (
        <section>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="taskName" value={selectedTask.name || ""} className="taskName" autoComplete="off" placeholder="Enter Task Name" onChange={e => setSelectedTask({ ...selectedTask, name: e.target.value })}></input>
                    <button type="submit" className="taskAddButton">{selectedTask.id ? "Update Task" : "Add Task"}</button>
                </form>

            </div>
        </section>
    )
}

export default AddTask;