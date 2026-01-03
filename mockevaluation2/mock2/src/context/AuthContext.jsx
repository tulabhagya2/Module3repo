import React from 'react'
import { createContext,useState } from 'react';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const[isAuth,setIsAuth]=useState(false);
  return (
    <div>
      <AuthContext.Provider value={{isAuth,setIsAuth}}> 
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;
