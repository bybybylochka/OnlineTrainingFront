import {mentorApi} from "../api/api";
import {addMentorsData, changeMentorsData, getMentors} from "./partnerReducer";

const SET_MENTOR_DATA= 'SET_MENTOR_DATA';
const RESET_MENTOR_DATA = 'RESET_MENTOR_DATA';


let initialState = {
    image: null,
    login: '',
    password: '',
    fullName: '',
    characteristic: '',
    experience: 1
}

const mentorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENTOR_DATA:
            return {
                ...state,
                ...action.payload
            }
        case RESET_MENTOR_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getMentorData = (mentorId) => async (dispatch) => {
    let response = await mentorApi.getMentorData(mentorId);
    if(response){
        dispatch(setMentorData(response));
    }
}
export const editMentor = (data) => async (dispatch) => {
    let response = await mentorApi.editMentorData(data);
    if(response) dispatch(getMentors());
}

export const addMentor = (data) => async (dispatch) => {
    let response = await mentorApi.addMentor(data);
    if(response) dispatch(getMentors());
}

export const setMentorData = (data) => {
    return {
        type: SET_MENTOR_DATA,
        payload: {...data}
    }
}
export const resetMentorData = () => {
    return {
        type: RESET_MENTOR_DATA,
        payload: {...initialState}
    }
}
export default mentorReducer;