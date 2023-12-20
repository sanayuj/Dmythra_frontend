
import {configureStore} from "@reduxjs/toolkit"
import useReducer from "../Features/setUser"
export default configureStore({
    reducer:{
        user:useReducer
    }
})