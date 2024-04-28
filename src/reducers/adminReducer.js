import {courseApi} from "../api/api";
import {setAllCourses} from "./courseReducer";

const SET_COURSES_TO_BE_CHECKED = 'SET_COURSES_TO_BE_CHECKED';

let initialState = {
    coursesToBeChecked: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSES_TO_BE_CHECKED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const getCoursesToBeChecked = () => async (dispatch) => {
    let response = await courseApi.getAllCourses();
    let coursesToBeChecked = response.courses.filter((course) => course.status==='FILLED_IN')
    if (response)
        dispatch(setCoursesToBeChecked(coursesToBeChecked));
}

export const approveCourse = (id) => async (dispatch) => {
    let response = await courseApi.approveCourse(id);
    if(response)
        dispatch(getCoursesToBeChecked());
}

export const setCoursesToBeChecked = (coursesToBeChecked) => {
    return {
        type: SET_COURSES_TO_BE_CHECKED,
        payload: {coursesToBeChecked}
    }
}

export default adminReducer;