import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, selectedTodo, selectTodo, openModal, toggleTodo, deleteTodo }) => {
  if (!todos || todos.length === 0) return <p className="p-4">No todos found. Add one!</p>;

  return (
    <div className="flex-1 p-4">
      <h2 className="font-bold mb-4">Todo Details</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isSelected={selectedTodo?.id === todo.id}
          onSelect={selectTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={() => openModal(true)}
        />
      ))}
    </div>
  );
};

export default TodoList;
