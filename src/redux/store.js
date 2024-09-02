



import {configureStore} from "@reduxjs/toolkit";
import cartRducer from "./count"


export const store= configureStore({

      reducer:{

          cart:cartRducer
      }

})