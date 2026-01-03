import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const Navigate=useNavigate();
    const {setUser}=useContext(AuthContext);
    const handleSubmit=()=>{
        if(email==="admin@gmail.com" && password==="admin1234"){
            
            Navigate("/admin/dashboard");
            Login({email});
        }
        else if(email==="customer@gmail.com" && password==="customer1234"){
             Navigate("/customer/dashboard");
              Login({email});

        }
        else{
            alert("Invalid credentials");
        }

        }
    
  return (
    <div>
      <input type="text" value={email} name="email" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" value={email} name="email" placeholder='enter password' onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
