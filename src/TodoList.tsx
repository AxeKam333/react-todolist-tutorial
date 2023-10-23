import { TodoItem } from "./TodoItem"


interface TodoListProps {
    todos: Array<any>,
    toggleTodo:any,
    deleteTodo:any,
}

export function TodoList({ todos,toggleTodo,deleteTodo }:TodoListProps) {
    return (
        <ul className="list">
        {todos.length === 0 && <p>(Add your Todos here)</p>}
        {todos.map(todo => {
          return (
            <TodoItem 
            {...todo} /* which is equivalent to:
            id={todo.id}
            completed={todo.completed}
            title={todo.completed}
            */
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
}