import React from 'react'
import { createContext } from 'react';
export const FleetContext=createContext();

const FleetContext = ({children}) => {
    const deleteVechicle=(id)=>{
        vechicles.filter(vechicle=>vechicle.id===id);

    }
    const updateDriver=()=>{

    }
  return (
    <div>
        <FleetContext.Provider value={{deleteVechicle,updateDriver}}>{children}</FleetContext.Provider>
      
    </div>
  )
}

export default FleetContext
