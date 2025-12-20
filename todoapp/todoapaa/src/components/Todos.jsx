import React from "react";
import TodoProvider from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <TodoProvider>
      <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
        <h2>Todo Application (Context API)</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todos;
