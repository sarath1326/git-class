

import * as Yup from "yup" ;



export const Signupschema=Yup.object({

      fullName:Yup.string().min(3,"*enter more 3 chr").required("*this filed is required"),
      email:Yup.string().email("*enter valid email id").required("*this filed is required"),
      password:Yup.string().min(4,"*enter minimum 4 char").required("*this filed is required"),
      cofPassword:Yup.string().required("*this fild is required").oneOf([Yup.ref("password"),null], "*passwort not match")


})




export const loginSchema =Yup.object({

      username:Yup.string().email("*enter valid username").required("*this filed is required"),
      password:Yup.string().required("*this filed is required ")

})