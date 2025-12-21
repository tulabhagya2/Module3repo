import React,{useContext} from "react";
import {PostsContext} from "../context/PostsContext"

const FetchPosts = () => {
    
  return (
    <div>
      fetch("https://jsonplaceholder.typicode.com/posts");
    </div>
  )
}

export default FetchPosts
