import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";

let store=configureStore({
    reducer: {
        auth: authReducer
    }
})

window.store=store;

export default store;