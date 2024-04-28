import {courseApi} from "../api/api";

const SET_PURCHASED_COURSE = 'SET_PURCHASED_COURSE';

const initialState = {
    purchasedCourses: []
}

const studentReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PURCHASED_COURSE:
            return {
                ...state,
                purchasedCourses: [...state.purchasedCourses, action.payload]
            }
        default:
            return state;
    }
}

export const purchaseCourse = (courseId) => async (dispatch) => {
    let response = await courseApi.purchaseCourse(courseId);
    if (response) dispatch(setPurchasedCourse(response))
}

export const setPurchasedCourse = (course) => {
    return {
        type: SET_PURCHASED_COURSE,
        payload: {...course}
    }
}

// export const setPurchasedCourses = (courses) => {
//     return {
//         type: SET_PURCHASED_COURSES,
//         payload
//     }
// }

export default studentReducer;