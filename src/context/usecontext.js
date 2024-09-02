


 import { createContext } from "react";
 import { useState } from "react";



 export const appContext=createContext();






     
const SentContext=(props)=>{
    

    const [num,setnum]=useState(0)



            return(

                <appContext.Provider value={{data:num,method:setnum,name:"sarath" }}>

                    {props.children}



                </appContext.Provider>



            )
     }


     export const FunctionSent=SentContext