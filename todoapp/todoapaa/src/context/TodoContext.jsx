import React, { createContext, useState } from "react";

// Create Context
export const TodoContext = createContext();

// Provider Component
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = (title) => {
    if (!title.trim()) return;
    const newTodo = { id: Date.now(), title };
    setTodos([...todos, newTodo]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
