import { Tasks } from "./tasks";



export function TasksList({ todos, toggleTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <Tasks
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            
          />
        )
      })}
    </ul>
  )
}