import {authApi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const REMOVE_USER_DATA = "REMOVE_USER_DATA";

let initialState = {
    role: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const login = (login, password) => async (dispatch) => {
    let response = await authApi.login(login, password);
    if (response) {
        localStorage.setItem('jwt', response.token);
        localStorage.setItem('role', response.role)
        dispatch(setUserData(response.role));
    }
}
export const logout = () => async (dispatch) => {
    await authApi.logout();
    clearUserData(dispatch);
}
export const register = (role, data) => async (dispatch) => {
    let response = await authApi.register(role, data);
}
export const me = () => async (dispatch) => {
    let token = localStorage.getItem('jwt');
    const validationRequest = {token}
    if (token) {
        let response = await authApi.me(validationRequest);
        if (!response.tokenValid) {
            clearUserData(dispatch);
        } else if (response.tokenValid) {
            dispatch(setUserData(response.role))
        }
    }
}

const clearUserData = (dispatch) => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    dispatch(removeUserData());
}

export const setUserData = (role) => {
    return {
        type: SET_USER_DATA,
        payload: {role, isAuth: true}
    }
}
export const removeUserData = () => {
    return {
        type: REMOVE_USER_DATA,
        payload: {role: '', isAuth: false}
    }
}


export default authReducer;