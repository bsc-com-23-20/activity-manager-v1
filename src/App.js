import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'popper.js'

import { useEffect, useState } from "react"
import { NewForm } from "./components/newForm"
import { TasksList } from "./components/tasksList"
// import "./App.css"
import{ Navbar } from "./components/navbar";
import Tasks from './components/tasks';


export default function App() {
  // const [todos, setTodos] = useState(() => {
  //   const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return []

  //   return JSON.parse(localValue)
  // })
  // // saving states??
  // // useEffect(() => {
  // //   localStorage.setItem("ITEMS", JSON.stringify(todos))
  // // }, [todos])
  // //  adding iterms on the to do
  // function addTodo(title) {
  //   setTodos(currentTodos => {
  //     return [
  //       ...currentTodos,
  //       { id: crypto.randomUUID(), title, completed: false },
  //     ]
  //   })
  // }
  // // toggles to do items
  // function toggleTodo(id, completed) {
    
  //   setTodos(currentTodos => {
  //     return currentTodos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, completed }
  //       }
  //       return todo
  //     })
  //   })
  // }



  return (
    <>
    {/* <Navbar />''   
    <NewForm onSubmit={addTodo} />
    <h1 className="header">Tasks List</h1>
    <TasksList todos={todos} toggleTodo={toggleTodo}  /> 
    
     <div class="container-fluid text-center"> 
    <div class="row">
      <div class="col-3"><Navbar /></div>
      <div class="col-9"><NewForm onSubmit={addTodo} />
    <h1 className="header">Tasks List</h1>
    <TasksList todos={todos} toggleTodo={toggleTodo}  /> </div>
    </div>
  </div> */}
    <Tasks />
    </>
  )
}

