


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home/Home';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Navbars from './Components/navbar/Navbars';
import {Routes , Route}from "react-router-dom"




function App() {
  
  
  return (
    <div>

    

      <Routes>

       <Route element={<Home />} path='/' />
       <Route element={<Signup />} path='/signup'    />
       <Route element={<Login />} path='/login'  />

         </Routes>

 



     




    </div>
  )
}

export default App
