import React from "react";

const TodoItem = ({ todo, isSelected, onSelect, onToggle, onDelete, onEdit }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 mb-2 border rounded cursor-pointer ${
        isSelected ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => onSelect(todo)}
    >
      <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>

      <div className="flex gap-2">
        <button
          className={`px-2 py-1 rounded text-white ${todo.completed ? "bg-yellow-500" : "bg-green-500"}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggle(todo.id, { completed: !todo.completed });
          }}
        >
          {todo.completed ? "Mark Pending" : "Complete"}
        </button>

        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(todo);
            onEdit();
          }}
        >
          Edit
        </button>

        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
