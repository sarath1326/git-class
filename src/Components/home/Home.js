


import React from 'react'
import "./Home.css"
import Navbars from '../navbar/Navbars'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate=useNavigate()
  
    return (
    <div>

        <Navbars />


        <div className='home-main'>

            <h1> Welcome</h1>


            <div className='btn-group'> 

            <button className='btn-1'  onClick={()=>navigate("/signup")}    > Signup</button>

           <button className='btn-2' onClick={()=>navigate("/login")}> Login</button>



            </div>










        </div>
      














    </div>
  )
}

export default Home
