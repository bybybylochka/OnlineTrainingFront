import {modulesApi} from "../api/api";
import {getCourseModules} from "./courseReducer";

const SET_TEST = 'SET_TEST';
const RESET_TEST_DATA = 'RESET_TEST_DATA';

let initialState = {
    name: '',
    estimatedTime: 0,
    questions: []
}
const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                ...action.payload
            }
        case RESET_TEST_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getTest = (testId) => async (dispatch) => {
    let response = await modulesApi.getTest(testId);
    if (response) dispatch(setTest(response));
}

export const setTest = (data) => {
    return {
        type: SET_TEST,
        payload: {...data}
    }
}

export const addTest = (data) => async (dispatch) => {
    let response = await modulesApi.addTest(data);
    if (response) dispatch(getCourseModules(data.courseId))
}
export const editTest = (data) => async (dispatch) => {
    let request = {
        testId: data.testId,
        request: {...data}
    }
    let response = await modulesApi.editTest(request);
    if (response) dispatch(getCourseModules(data.courseId))
}
export const resetTestData = () => {
    return {
        type: RESET_TEST_DATA,
        payload: {...initialState}
    }
}

export default testReducer;