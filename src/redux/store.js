import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import partnerReducer from "../reducers/partnerReducer";
import mentorReducer from "../reducers/mentorReducer";
import courseReducer from "../reducers/courseReducer";
import lessonReducer from "../reducers/lessonReducer";
import taskReducer from "../reducers/taskReducer";
import testReducer from "../reducers/testReducer";
import adminReducer from "../reducers/adminReducer";
import studentReducer from "../reducers/studentReducer";

let store = configureStore({
    reducer: {
        auth: authReducer,
        partner: partnerReducer,
        mentor: mentorReducer,
        course: courseReducer,
        lesson: lessonReducer,
        task: taskReducer,
        test: testReducer,
        admin: adminReducer,
        student: studentReducer
    }
})

window.store = store;

export default store;