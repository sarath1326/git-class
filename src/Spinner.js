

import React from 'react'
import { useState } from 'react'




function Spinner() {

    const [image , setimage]=useState("")




  return (
    <div>

    <form>

        <input type='file' onChange={(e)=>{setimage(e.target.files[0])}}   />


          </form>

          <button> submit</button>







      
    </div>
  )
}

export default Spinner
