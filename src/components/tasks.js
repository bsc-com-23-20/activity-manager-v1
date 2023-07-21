import { useEffect } from "react";
import Api from "../apis/api";


export function Tasks({ completed, id, title, toggleTodo }) {
  // async componentDidMount(){
    async function getUniversities() {  
      // geting data from te api
      return await Api.getUniversitiesGivenCountry();
      
    } 
  
  useEffect(()=>{
    let data =getUniversities()
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