import React from 'react'
import { useContext,useState,useEffect,useRef} from 'react'
import {  useNavigate } from 'react-router-dom'
import {AuthContext} from "./context/AuthContext"
 

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const emailref=useRef(null);
    const Navigate=useNavigate();
    const{setIsAuth}=useContext(AuthContext)
    useEffect(()=>{
        emailref.current.focus();

    },[]);
    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin1234"){
            alert("Login Success");
            setIsAuth(true);
            Navigate("/admin");


        }
        else{
            alert("wrong email or password")
        }
    }

  return (
    <div>
      <input value={email} ref={emailref} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
      <input  value={password} type="password" placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
