import {modulesApi} from "../api/api";
import {getCourseModules} from "./courseReducer";

const SET_TASK = 'SET_TASK';
const RESET_TASK_DATA = 'RESET_TASK_DATA';

let initialState = {
    name: '',
    estimatedTime: 0,
    description: '',
    maximumScore: 0
}
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                ...action.payload
            }
        case RESET_TASK_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getTask = (taskId) => async (dispatch) => {
    let response = await modulesApi.getTask(taskId);
    console.log(response);
    if (response) dispatch(setTask(response));
}

export const setTask = (data) => {
    return {
        type: SET_TASK,
        payload: {...data}
    }
}

export const addTask = (data) => async (dispatch) => {
    let response = await modulesApi.addTask(data);
    if (response) dispatch(getCourseModules(data.courseId))
}
export const editTask = (data) => async (dispatch) => {
    let response = await modulesApi.editTask(data);
    if (response) dispatch(getCourseModules(data.courseId))
}
export const resetTaskData = () => {
    return {
        type: RESET_TASK_DATA,
        payload: {...initialState}
    }
}

export default taskReducer;