
import {Todo} from "../context/Todo";
import React,{useState,useContext} from 'react'


const Add = () => {
    const{addTodo}=useContext(Todo);
    const[title,setTitle]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(title);
        setTitle("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Enter the title" onChange={(e)=>setTitle(e.target.value)} />
        <button type="submit">Add</button>

    </form>
  )
}

export default Add;
