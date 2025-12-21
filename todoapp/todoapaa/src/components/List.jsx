
import React,{ useContext } from "react"
import Item from "./Item"


const List = () => {
    const{todos}=useContext(Todo);
    if(todos.length===0) return <p>No todos Available</p>

  return (
    <div>
     {todos.map((todo)=>(
        <Item id={todo.id} key={todo.id} />
      )
      )}
    </div>
  )
}

export default List

