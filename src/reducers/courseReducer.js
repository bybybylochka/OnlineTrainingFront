import {courseApi} from "../api/api";
import {getCourses} from "./partnerReducer";

const SET_COURSE_DATA= 'SET_COURSE_DATA';
const RESET_COURSE_DATA = 'RESET_COURSE_DATA';



let initialState = {
    image: null,
    name: '',
    description: '',
    category: '',
    price: '',
    mentor: {},
    status: ''
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSE_DATA:
            return {
                ...state,
                ...action.payload
            }
        case RESET_COURSE_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getCourseData = (courseId) => async (dispatch) => {
    let response = await courseApi.getCourseData(courseId);
    console.log(response)
    if(response)
        dispatch(setCourseData(response));
}
export const editCourse = (data) => async (dispatch) => {
    let response = await courseApi.editCourseData(data);
    if(response) dispatch(getCourses());
}

export const addCourse = (data) => async (dispatch) => {
    let response = await courseApi.addCourse(data);
    if(response) dispatch(getCourses());
}

export const deactivateCourse = (courseId) => async (dispatch) => {
    let response = await courseApi.deactivateCourse(courseId);
    if(response)
        dispatch(getCourses());
}

export const setCourseData = (data) => {
    return {
        type: SET_COURSE_DATA,
        payload: {...data}
    }
}
export const resetCourseData = () => {
    return {
        type: RESET_COURSE_DATA,
        payload: {...initialState}
    }
}

export default courseReducer;