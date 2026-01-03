import React from 'react'
import CardDisplay from './CardDisplay';

const Admin = () => {
    const[cards,setCards]=useState();
    const[formData,setFormData]=useState({
        restuarantId:"",
        restuarantName:"",
        address:"",
        type:"",
        selectone:""

    });
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const addData=()=>{
        const{restuarantId,restuarantName,address,type,selectone}=formData;
        if(!restuarantId|| !restuarantName||!address||!type||!selectone){
            alert("plese enter all the fields");
            return;
            setCards({id:Date.now(),formData});
            

        }
    }
    const updateData=(id)=>{
        setCards(prev=>prev.map((card)=>card.id===id?formData:card
    ))
    }
    const deleteData=(id)=>{
        setCards(prev=>prev.filter((card)=>card.id!==id));
    }
  return (
    <>
    <div>
        <input type="text" name="restuarantId" value={formData.restuarantId} placeholder="enter id" onChange={handleChange} />
        <input type="text" name="restuarantName" value={formData.restuarantName} placeholder="enter Name" onChange={handleChange} />
        <input type="text" name="address" value={formData.address} placeholder="enter address" onChange={handleChange} />
        <select name="type" value={formData.type}>
            <option value="" >select the type</option>
            <option>Rajasthani</option>
            <option>Gujarati</option>
            <option>Mughlai</option>
            <option>Jhain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
        </select>
        <select name="selectone" value={formData.selectone}>
            <option value="">
                <option>true</option>
                <option>false</option>
            </option>
        </select>
      <button onClick={addData}>Add</button>
    </div>
    <div>
        {cards.map(card=>(
            <li key={card.id}>
                <li>{formData.restuarantId}</li>
                <li>{formData.restuarantName}</li>
                <li>{formData.address}</li>
                <li>{formData.type}</li>
                <li>{formData.selectone}</li>
            
            <button onchange={updateData}>Update</button>
            <button onChange={deleteData}>Delete</button>
            
            </li>

        ))}
    </div>
    </>
  )
}

export default Admin
