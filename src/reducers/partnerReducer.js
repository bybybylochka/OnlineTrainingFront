import {partnerApi} from "../api/api";

const SET_PARTNER_DATA = 'SET_PARTNER_DATA';
const SET_MENTORS = 'SET_MENTORS';
const SET_COURSES = 'SET_COURSES';

let initialState = {
    name: '',
    UNP: '',
    mentors: [],
    courses: []
}

const partnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PARTNER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_MENTORS:
            return {
                ...state,
                ...action.payload
            }
        case SET_COURSES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getPartnerData = () => async (dispatch) => {
    const response = await partnerApi.getPartnerData();
    if (response) {
        dispatch(setPartnerData(response));
    }
}

export const editPartnerData = (data) => async (dispatch) => {
    const response = await partnerApi.editPartnerData(data);
    if (response) {
        dispatch(setPartnerData(data))
    }
}

export const getMentors = () => async (dispatch) => {
    const response = await partnerApi.getMentors();
    if (response) {
        dispatch(setMentors(response.mentors))
    }
}
export const getCourses = () => async (dispatch) => {
    const response = await partnerApi.getCourses();
    console.log(response.courses)
    if (response) {
        dispatch(setCourses(response.courses))
    }
}

export const setPartnerData = (data) => {
    return {
        type: SET_PARTNER_DATA,
        payload: {name: data.name, UNP: data.unp}
    }
}

export const setMentors = (data) => {
    return {
        type: SET_MENTORS,
        payload: {mentors: data}
    }
}
export const setCourses = (data) => {
    return {
        type: SET_COURSES,
        payload: {courses: data}
    }
}
export default partnerReducer;