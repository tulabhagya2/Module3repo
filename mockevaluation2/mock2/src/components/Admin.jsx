import React from 'react'
import {useState,useEffect} from "react"

const Admin = () => {
    const[regnumber,setRegno]=useState();
    const[category,setCategory]=useState("");
    const[drivername,setDrivername]=useState("");
    const[availability,setAvailability]=useState("");

  return (
    <div>
        <aside>
            <input type="text" placeholder="enter regno" value={regnumber} onChange={(e)=>setRegno(e.target.value)} />
           <select name={category} onChange={(e)=>setCategory(e.target.value)}>
            <option></option>
            <option>Auto</option>
            <option> Bus</option>
            <option>Car</option>
            <option>Truck</option>
           </select>
            <input type="text" placeholder="enter driver name" value={drivername} onChange={(e)=>setDrivername(e.target.value)} />
            <select name={availability} onChange={(e)=>setAvailability(e.target.value)}>
            <option></option>
            <option>Available</option>
            <option> unavailable</option>
            
           </select>
        
        </aside>
      
    </div>
  )
}

export default React.memo(Admin);
