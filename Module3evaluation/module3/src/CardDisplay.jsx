import React from 'react'

const CardDisplay = ({cards,updateData,deleteData}) => {
  return (
    <div>
      <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"/>
      <p>restuarantid:{formData.restuarantId}</p>
      <p>{formData.restuarantName}</p>
      <p>{formData.address}</p>
<p>{formData.type}</p>
<p>{formData.selectone}</p>
<button onClick={()=>{updateData}}>Update</button>
<button onClick={()=>{deleteData}}>Delete</button>

    </div>
  )
}

export default CardDisplay
