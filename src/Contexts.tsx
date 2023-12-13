import { createContext } from "react";

export const TodosContext = createContext([{
    id: crypto.randomUUID(),
    title: 'test',
    completed: false
  }]);

  export const InterpretedContext = createContext([{
    id: crypto.randomUUID(),
    title: 'test xd',
    completed: false
  }])