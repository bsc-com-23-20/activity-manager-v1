import {useState} from "react";

export function NewForm({ onSubmit }){
    const[newTask, setNewTask] = useState("")


    // function to hundle submit
    /** this is the one bringing the error */
    function handleSubmit(e){
        e.preventDefault()
        onSubmit(newTask)
        setNewTask("")
    }      
        


return(
    <form onSubmit={handleSubmit} className="form-item">
    <label htmlFor="tasks">New Task</label>
    <input value = {newTask} 
    onChange ={e => setNewTask(e.target.value)} 
    type = "text" id = "tasks"></input>
      <button className="btn">Add</button>
    </form>
    )
}
