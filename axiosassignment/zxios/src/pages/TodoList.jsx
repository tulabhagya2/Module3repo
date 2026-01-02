import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>{todo.title}</strong> —{" "}
            {todo.completed ? "Completed ✅" : "Pending ❌"}
          </p>

          <Link to={`/todo/${todo.id}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
