import { useContext} from "react";
import { InterpretedContext, TodosContext } from "./Contexts";

export const Wrapper = ({ children }: any) => {
  const oldContext = useContext(TodosContext);
  const newContext = oldContext.map((todo) => {
    if (todo.title[0] == 'x') {
      return todo;
    } else {
      const newTodo = todo;
      newTodo.title = "x"+todo.title;
      return newTodo;
    }
  });
  return (
    <>
      <InterpretedContext.Provider value={newContext}>
        {children}
      </InterpretedContext.Provider>
    </>
  );
};
