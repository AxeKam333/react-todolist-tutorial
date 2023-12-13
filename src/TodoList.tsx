import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { InterpretedContext } from "./Contexts";

export function TodoList() {
  const todos = useContext(InterpretedContext);
  return (
    <ul className="list">
      {todos.length === 0 && <p>(Add your Todos here)</p>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo} /* which is equivalent to:
            id={todo.id}
            completed={todo.completed}
            title={todo.completed}
            */
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
