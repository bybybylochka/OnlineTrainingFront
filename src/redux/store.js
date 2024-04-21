import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import partnerReducer from "../reducers/partnerReducer";
import mentorReducer from "../reducers/mentorReducer";
import courseReducer from "../reducers/courseReducer";

let store=configureStore({
    reducer: {
        auth: authReducer,
        partner: partnerReducer,
        mentor: mentorReducer,
        course: courseReducer
    }
})

window.store=store;

export default store;