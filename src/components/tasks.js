import { useEffect } from "react";
import Api from "../apis/api";


export function Tasks({ completed, id, title, toggleTodo }) {
  // async componentDidMount(){
    async function getUniversities() {     
      
      let data = await Api.getUniversitiesGivenCountry();
      
    } 
  
  useEffect(()=>{
    getUniversities()
      // debugger
      
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