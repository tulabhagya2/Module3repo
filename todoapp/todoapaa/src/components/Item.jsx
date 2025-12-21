
import React,{useContext} from "react";
import Todo from "../context/Todo.jsx"

const Item = (id) => {
    const{todos,deleteTodo}=useContext(TodoContext);
    const todo=todos.find((t)=>t.id===id);
    if(!todo) return null;
    
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={()=>deleteTodo(todo.id)}></button>
    </div>
  )
}

export default Item
