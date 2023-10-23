import { useState } from "react"
import "./style.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState<Array<any>>([])
  
  function handleSubmit(e: any) {
    e.preventDefault()

    const todoObject = {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false
    }
    setTodos(currnetTodos => [...currnetTodos, todoObject])

    setNewItem("")
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
    <>
      <h1>Todo List App</h1>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
          <button className="btn">Add</button>
        </div>
      </form>
      <h2 className="header">List</h2>
      <ul className="list">
        {todos.length === 0 && <p>(Add your Todos here)</p>}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}