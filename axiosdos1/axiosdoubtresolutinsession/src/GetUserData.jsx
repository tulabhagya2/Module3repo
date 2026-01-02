
import React, { useState,useEffect} from "react";
import axios from "axios";


const GetUserData = () => {
    const[users,setUsers]=useState([]);
    const[isEditing,setisEditing]=useState(false);
    const[editId,seteditId]=useState(null);
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        phone:""
    });

    const fetchUsers=async()=>{
        try{
        const res=await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
        }
        catch{
            console.log("error")

        }

    }

    useEffect(()=>{
        fetchUsers()

    },[]);
    const addUser=async()=>{
        try{
        const res=await axios.post("https://jsonplaceholder.typicode.com/users",formData);
        setUsers([...users,res.data])
        resetForm();
        }
        catch{
            console.log("error");
        }

    }
    const updateUser=async()=>{
        try{
            const res=await axios.put(`https://jsonplaceholder.typicode.com/users/${editId}`,formData);
            setUsers(users.map(user=>user.id===editId?res.data:user));
            resetForm();

        }
        catch{
            console.log("error");

        }
    }
    const deleteUser=async(id)=>{
        try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUsers(users.filter(user=>user.id!==id))
        }
        catch{
            console.log("error")
        }

    }
    const resetForm=()=>{
        setFormData({name:"",email:"",phone:""});
        setisEditing(false);
        seteditId(null)
    }
    const editHandle=(user)=>{
        setisEditing(true);
        seteditId(user.id);
        setFormData({
            name:user.name,
            email:user.email,
            phone:user.phone
        })

    }
    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData(prev=>({...prev,[name]:value}))
    }

  return (
    <>
    <div>
        <h2>{isEditing?"Update User":"Add User"}</h2>
        <input type="text" name="name" value={formData.name} placeholder="enter your name" onChange={handleChange} />
        <input type="text"  name="email" value={formData.email} placeholder="enter your email" onChange={handleChange} />
        <input type="text" name="phone" value={formData.phone} placeholder="enter your name" onChange={handleChange} />
        {
            isEditing?(
                <>
                <button onClick={updateUser}>Update</button>
                <button onClick={resetForm}>cancel</button>

                </>

            ):
            (
                <>
                <button onClick={addUser}>Add User</button>
                </>

            )
        }



    </div>
    <div>
        <table>
            
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                    </tr>
                </thead>
           
            <tbody>
                
                {users.map(user=>(

                 <tr key={user.id}>   
                 <td>{user.id}</td> 
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.phone}</td>
                 <td><button onClick={()=>deleteUser(user.id)}>Delete</button>
                 <button onClick={()=>editHandle(user)}>Edit</button></td>



                   </tr>  
                )
            )
                }
              
            </tbody>

        </table>
        
      
    </div>
    </>
  )
}

export default GetUserData
