



import {createSlice} from "@reduxjs/toolkit";



  const cartSlice=createSlice({
     
       name:"count",
       initialState:{
         
            count:0
            
       },


       reducers:{

            changeCount:(state,)=>{

                state.count +=1

            },

            addName:(state,argu)=>{

             state.count=argu.payload



            }
         
        
        }

})


export const {changeCount,addName}=cartSlice.actions
export default cartSlice.reducer
