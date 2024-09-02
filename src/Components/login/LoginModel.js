import React from 'react'
import "./Login.css"
import { useFormik } from 'formik'
import {loginSchema}from "../../schema/Schema"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import {message}from "antd"


 



function Login() {

    const navigate=useNavigate()


    const {values,errors,handleChange,handleBlur,handleSubmit,touched  }=useFormik({


           initialValues:{
            username:"",
            password:""
             
        },

        validationSchema:loginSchema,

             onSubmit:(values)=>{

                console.log(values)


                 axios.post("http://localhost:3001/log",values).then((respo)=>{

                 if(respo.data.flag){

                    navigate("/welcome")

                 }else if(respo.data.usernot){

                   message.error("user not found")
                
                }else{

                    
                    message.error("email id and password not found ")

                 }
                 
                
                })


            
            
            
            
            
            }

             



    })






    return (
        <div className='main-login'>

            <div className='form-main'>

                <h2> Login </h2>

                <form onSubmit={handleSubmit} className='form-login'>

                <input className='input-login' type='email' placeholder='enter email id'  
                    
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    /> <br/>  
                    {errors.username&& touched.username? (
                
                <p className='perr'>{errors.username}    </p>
               
               ): <br/>}
 

                  
                
                    
                    
                    


               <input className='input-login' type='password' placeholder='enter your password'  
                    
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    /> <br/>

               {errors.password && touched.password? (
                
                <p className='perr'>{errors.password}    </p>
               
               ): <br/>}


                    <button className='btn-login' type='submit'> Login</button>

                 </form>

                 <p onClick={()=>{navigate("/signup")}}   className='p-login'> Create a new account ?</p>


            </div>

        </div>
    )
}

export default Login
