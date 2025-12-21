import React,{useState} from "react"
import {PostsContext} from "../context/Posts.Context"

const ThemeManagement = () => {
    const[theme,setTheme]=useState(light);
    const changeTheme=()=>{
        <setTheme id="Dark" />
    }
  return (
    <div>
    
      <button type="submit" onChange={changeTheme}>change themes</button>
    </div>
  )
}

export default ThemeManagement
