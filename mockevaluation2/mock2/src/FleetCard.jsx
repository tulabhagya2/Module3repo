import React from 'react'

const FleetCard = ({fleet,onUpdate,onToggle,onDelete}) => {
  return (
    <div classname="card">
        <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" />
        <p>Regno:{fleet.regno}</p>
        <p>Category:{fleet.category}</p>
        <p>Driver:{fleet.driver}</p>
        <p>Availabilty:{fleet.availability}</p>
        <button onClick={()=>onUpdate(fleet.id)}>update</button>
        <button onClick={()=>onToggle(fleet.id)}>Toggle</button>
        <button onClick={()=>onDelete(fleet.id)}>Delete</button>
        
      
    </div>
  )
}

export default FleetCard
