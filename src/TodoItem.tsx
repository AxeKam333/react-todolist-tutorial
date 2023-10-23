
interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
    toggleTodo: any,
    deleteTodo:any
}

export function TodoItem({id,title,completed, toggleTodo, deleteTodo}:TodoItemProps) {
    return (
        <li>
          <label>
            <input type="checkbox" checked={completed} 
            onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button 
          onClick={() => deleteTodo(id)} 
          className="btn btn-danger">Delete</button>
        </li>
      )
}