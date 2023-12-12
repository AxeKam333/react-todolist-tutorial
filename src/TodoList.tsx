import { useContext } from "react";
import { TodoItem } from "./TodoItem"
import { TodosContext } from "./Contexts"


interface TodoListProps {
    toggleTodo:any,
    deleteTodo:any,
}

export function TodoList({ toggleTodo,deleteTodo }:TodoListProps) {
      const todos = useContext(TodosContext);
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