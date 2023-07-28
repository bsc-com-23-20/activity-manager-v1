import { useEffect } from "react";
import Api from "../apis/api";


export function Tasks({ completed, id, title, toggleTodo }) {
  // async componentDidMount(){
    async function getTasks() {  
      // geting data from te api
      return await Api.getTasks();
      
    } 
  
  useEffect(()=>{
    debugger
    
    let data =Api.getTasks();
    console.log(data);
    })

  return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        
      </li>
    )
  }