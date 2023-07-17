

import { useEffect, useState } from "react"
import { NewForm } from "./components/newForm"
import { TasksList } from "./components/tasksList"
import "./App.css"


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }



  return (
    <>
      <NewForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TasksList todos={todos} toggleTodo={toggleTodo}  />
    </>
  )
}

