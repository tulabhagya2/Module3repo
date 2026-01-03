import React, { createContext } from 'react'


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const[user,setUser]=useState("");
    const login=({email,password})=>{
        setUser({email})

    }
  return (
    <AuthContext.Provider value={{user,login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;


