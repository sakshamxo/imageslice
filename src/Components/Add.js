import React, { useState } from 'react'
import { addUser } from '../store/UserSlice/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("")

    const SubmitHandler = (e)=>{
        e.preventDefault();
        const user={
            Username,
            Email
        };
        dispatch(addUser(user));
        navigate("/show")
    }

  return (
   <form onSubmit={SubmitHandler}>
    <input className='form-control mb-3' type="text" placeholder='Username' value={Username} onChange={(e)=>setUsername(e.target.value)} />
    <input className='form-control mb-3' type="email" placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
    <button className=' w-100 btn btn-primary'>Add User</button>
   </form>
  )
}

export default Add