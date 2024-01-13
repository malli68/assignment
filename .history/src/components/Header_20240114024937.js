import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../StateManagement/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const selector= useSelector((store)=> store.user.user)
    console.log(selector)
  return (
    <div>
       <h1>{selector}</h1> 
       <button onClick={()=>(addUser())}>Increment</button>
    </div>
  )
}

export default Header