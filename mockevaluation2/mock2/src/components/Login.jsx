import React from 'react'
import {useState,useEffect} from "react";
 
const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    validUsername="admin@gmail.com";
    validPassword="admin1234"

  return (
    <div>
        <input type="email" placeholder="enter your email" email={email} onChange={(e)=>setEmail(e.target.value)} />
         <input type="password" placeholder="enter your password" password={password} onChange={(e)=>setPassword(e.target.value)} />
         <button type='submit'>Login</button>
         if(email===validUsername && password===validPassword){
            alert("successs")
         }
         else{
            alert(" wrong email or password")
         }
      
    </div>
  )
}

export default Login
