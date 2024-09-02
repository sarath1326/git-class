


// import React from 'react'
// import "./Home.css"
// import Navbars from '../navbar/Navbars'
// import { useNavigate } from 'react-router-dom'
// import { GoogleLogin } from '@react-oauth/google';


// function Home() {

//     const navigate = useNavigate()

//     return (
//         <div>

//             <Navbars />


//             <div className='home-main'>

//                 <h1> Welcome</h1>


//                 <div className='btn-group'>

//                     <button className='btn-1' onClick={() => navigate('/signup')}    > Signup</button>

//                     <button className='btn-2' onClick={() => navigate("/login")}> Login</button>



//                 </div>


//                 <GoogleLogin

                    
                    
//                     onSuccess={credentialResponse => {
//                         console.log(credentialResponse);
//                     }}
//                     onError={() => {
//                         console.log('Login Failed');
//                     }}
//                 />;













//             </div>







 import React from 'react'
 import { useContext } from 'react'
 import{appContext} from "../../context/usecontext"
 import {changeCount,addName} from "../../redux/count"
 import { useDispatch } from 'react-redux'
 
 function Home() {

     const{method,data}=useContext(appContext)
     const despatch=useDispatch()

   return (
     <div>

     

       <button  onClick={()=>{despatch(changeCount())}}    >  add cart </button>

       <button onClick={()=>{despatch(addName("count box"))}}>  change </button>



       
     </div>
   )
 }
 
 export default Home
 










