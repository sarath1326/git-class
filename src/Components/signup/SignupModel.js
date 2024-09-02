

import React from 'react'
import "./Signup.css";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { Signupschema } from "../../schema/Schema"
import axios from "axios"



const initialValues = {
    fullName: "",
    email: "",
    password: "",
    cofPassword: ""
}






function Signup() {

   const navigate =useNavigate()


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,

        validationSchema: Signupschema,

        onSubmit: (values,action) => {

         
            axios.post("http://localhost:3001/sig",values).then((respo)=>{

            if(respo.data.flag){

                navigate("/login")
                
            }else{

                console.log("errrrrr")
            }


            }).catch(err=>{

                console.log("err")
            })
            
         
            
            
            
            
            action.resetForm();
        
        }

    });





    return (
        <div className='main-sig'>

            <div className='form-box'>

                <p className='title-sig'> Signup</p>

                <form className='form-sig' onSubmit={handleSubmit}>

                    <input type='text' id='fullName' name='fullName' placeholder='Enter your full name'
                        onChange={handleChange}
                        value={values.fullName}
                        onBlur={handleBlur}


                    /><br />

                    {errors.fullName && touched.fullName ? (

                        <p className='perr'>{errors.fullName}    </p>

                    ) : <br />}




                    <input type='text' id='email' name='email' placeholder='Enter your  Email id'

                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}

                    /><br />

                    {errors.email && touched.email ? (

                        <p className='perr'>{errors.email}    </p>

                    ) : <br />}







                    <input type='password' id='password' name='password' placeholder='Enter your  password'

                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}

                    /><br />

                    {errors.password && touched.password ? (

                        <p className='perr'>{errors.password}    </p>

                    ) : <br />}





                    <input type='password' id='cofPassword' name='cofPassword' placeholder='conform password'

                        onChange={handleChange}
                        value={values.cofPassword}
                        onBlur={handleBlur}

                    /><br />

                {errors.cofPassword && touched.cofPassword? (
                
                <p className='perr'>{errors.cofPassword}    </p>
               
               ): <br/>}

               <input type='file' accept='image/*' capture="environment" /> 




                    <button type='submit' className='btn-sig'> Submit</button>



                </form>


                <p  onClick={()=>navigate("/login")}   className='link-sig'> you have alreday a account ?</p>




            </div>















        </div>
    )
}

export default Signup
