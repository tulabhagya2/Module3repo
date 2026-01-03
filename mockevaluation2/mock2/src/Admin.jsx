import React, { useCallback } from 'react'
import { useState } from 'react';
import FleetCard from './FleetCard';
const Admin = () => {
    const[fleets,setFleets]=useState([]);
    const[formdata,setFormData]=useState({
        regno:"",
        category:"",
        driver:"",
        availability:"",

    });
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formdata,[name]:value});
    };
    const addFleet=()=>{
        const {regno,category,driver,availability}=formdata;
        if(!regno||!category||!driver||!availability){
            alert("fill the required fields ");
            return;

        }
        setFleets((prev)=>[...prev,{
            id:Date.now(),...formdata
        }])
        setFormData({
            regno:"",
            category:"",
            driver:"",
            availability:"",

        });
    }
    const updateDriver=useCallback((id)=>{
        const name=prompt("enter the driver name");
        if(!name) return;
        setFleets(prev=>prev.map((f)=>f.id===id?{...f,driver:name}:f));

    },[]);
    const toggleAvailability=useCallback((id)=>{
        setFleets(prev=>prev.map((f)=>f.id===id?{...f,availability:f.availability==="available"?"unavailable":"available"}:f

    ))

        

    },[]);
    const deleteVechicle=useCallback((id)=>{
        if(!window.confirm("are you sure")) return;
        setFleets(prev=>prev.filter((f)=>f.id!==id))

    },[]);
  return (
    <div>
       {fleets.map((fleet)=>(
        <FleetCard key={fleet.id}
        fleet={fleet}
        onUpdate={updateDriver}
        onToggle={toggleAvailability}
        onDelete={deleteVechicle}
        />

      )) }
        <h3>Fleet Form</h3>
        <form>
        <input type="text" name="regno" value={formdata.regno} placeholder="enter regno" onChange={handleChange} /><br></br>
         <select value={formdata.category} name="category" placeholder="enter category" onChange={handleChange} ><br></br>
            <option value="">select category</option>
            <option value>Auto</option>
            <option >Car</option>
            <option>Truck</option>
            <option>Bus</option>
            </select>
            <input type="text" name="driver" value={formdata.driver} placeholder='enter driver name' onChange={handleChange}/>
            <select value={formdata.availability} name="availability" placeholder="enter the status" onChange={handleChange}>
                <option value="">select availability</option>
                <option value="available">available</option>
                <option value="unavailable">unavailable</option>
            </select>
                <button type="button" onClick={addFleet}>Add Fleet</button>
                </form>


      
    </div>
  )
}

export default Admin
