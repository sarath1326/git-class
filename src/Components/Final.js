

import React from 'react'
import "./Final.css"
import { useContext } from 'react'
import{appContext}from "../context/usecontext"
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'


function Final() {

  // const {data,name}=useContext(appContext);

  const {count,name} =useSelector((state)=>state.cart)

  console.log(count,"redex")

    
  return (
    <div className='main-final'>



        <h1> counter :{count} </h1>

        <h1> {name} </h1>

        
      
    </div>
  )
}

export default Final
