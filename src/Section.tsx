import { useEffect, useState } from "react"
import "./style.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

export default function Section({ children }: any) {
  const [todos, setTodos] = useState<Array<any>>(
  //   () => {
  //  const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return []
  //   return JSON.parse(localValue)
  // }
  [])

  // useEffect(() => {
  //   localStorage.setItem("ITEMS", JSON.stringify(todos))
  // },[todos])

  function addTodo(newItem:string) {
    const todoObject = {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false
    }
    setTodos(currnetTodos => [...currnetTodos, todoObject])
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      }
    )})
  }

  function deleteTodo(id:string) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="section">
      <h1>{children}</h1>
      <TodoForm onSubmit={addTodo}/>
      <h2 className="header">List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}