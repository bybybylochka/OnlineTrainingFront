import {modulesApi} from "../api/api";
import {getCourseModules} from "./courseReducer";

const SET_LESSON = 'SET_LESSON';
const RESET_LESSON_DATA = 'RESET_LESSON_DATA';

let initialState = {
    name: '',
    estimatedTime: 0,
    content: ''
}
const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LESSON:
            return {
                ...state,
                ...action.payload
            }
        case RESET_LESSON_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getLesson = (lessonId) => async (dispatch) => {
    let response = await modulesApi.getLesson(lessonId);
    console.log(response);
    if (response) dispatch(setLesson(response));
}

export const setLesson = (data) => {
    return {
        type: SET_LESSON,
        payload: {...data}
    }
}

export const addLesson = (data) => async (dispatch) => {
    let response = await modulesApi.addLesson(data);
    if (response) dispatch(getCourseModules(data.courseId))
}
export const editLesson = (data) => async (dispatch) => {
    let response = await modulesApi.editLesson(data);
    if (response) dispatch(getCourseModules(data.courseId))
}
export const resetLessonData = () => {
    return {
        type: RESET_LESSON_DATA,
        payload: {...initialState}
    }
}

export default lessonReducer;