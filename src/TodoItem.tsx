import { useContext } from "react";
import { UseStateContext } from "./Contexts";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export function TodoItem({ id, title, completed }: TodoItemProps) {
  const { toggle: toggleTodo, delete: deleteTodo } =
    useContext(UseStateContext);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
