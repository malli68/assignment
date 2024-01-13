import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch();
    const selector= useSelector((store)=> store.user.user)
    console.log(selector)
  return (
    <div>
       <h1>{selector}</h1> 
    </div>
  )
}

export default Header