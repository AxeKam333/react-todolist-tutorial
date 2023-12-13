import { createContext } from "react";

export const TodosContext = createContext([
  {
    id: crypto.randomUUID(),
    title: "test",
    completed: false,
  },
]);

export const InterpretedContext = createContext([
  {
    id: crypto.randomUUID(),
    title: "test xd",
    completed: false,
  },
]);

export const UseStateContext = createContext<{ toggle: any; delete: any }>({
  toggle: (e: any) => e,
  delete: (e: any) => e,
});
