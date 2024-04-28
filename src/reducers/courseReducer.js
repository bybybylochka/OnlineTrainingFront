import {courseApi} from "../api/api";
import {getCourses} from "./partnerReducer";
import {getMentorCourses} from "./mentorReducer";

const SET_COURSE_DATA = 'SET_COURSE_DATA';
const RESET_COURSE_DATA = 'RESET_COURSE_DATA';
const SET_COURSE_MODULES = 'SET_COURSE_MODULES';
const SET_ANSWERS = 'SET_ANSWERS';
const SET_ALL_COURSES = 'SET_ALL_COURSES';


let initialState = {
    image: null,
    id: '',
    name: '',
    description: '',
    category: '',
    price: '',
    mentor: {},
    status: '',
    paymentLink: '',
    modules: {
        lessons: [],
        tasks: [],
        tests: []
    },
    answers: [],
    all: [],
    entrepreneur: {}
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSE_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ALL_COURSES:
            return {
                ...state,
                ...action.payload
            }
        case RESET_COURSE_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_COURSE_MODULES:
            return {
                ...state,
                ...action.payload
            }
        case SET_ANSWERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const getAllCourses = () => async (dispatch) => {
    let response = await courseApi.getAllCourses();
    let courses = response.courses.filter(course => course.status ==='APPROVED')
    if (response)
        dispatch(setAllCourses(courses));
}
export const getCourseData = (courseId) => async (dispatch) => {
    let response = await courseApi.getCourseData(courseId);
    if (response)
        dispatch(setCourseData(response));
}
export const getCourseModules = (courseId) => async (dispatch) => {
    let lessonsResponse = await courseApi.getLessons(courseId);
    let tasksResponse = await courseApi.getTasks(courseId);
    let testsResponse = await courseApi.getTests(courseId);
    dispatch(setCourseModules(lessonsResponse.lessons, tasksResponse.tasks, testsResponse.tests));
}
export const editCourse = (data) => async (dispatch) => {
    let response = await courseApi.editCourseData(data);
    if (response) dispatch(getCourses());
}

export const addCourse = (data) => async (dispatch) => {
    let response = await courseApi.addCourse(data);
    if (response) dispatch(getCourses());
}

export const deactivateCourse = (courseId) => async (dispatch) => {
    let response = await courseApi.deactivateCourse(courseId);
    if (response)
        dispatch(getCourses());
}

export const sendCourse = (courseId) => async (dispatch) => {
    let response = await courseApi.sendCourse(courseId);
    if (response)
        dispatch(getMentorCourses());
}

export const getCourseAnswers = (courseId) => async (dispatch) => {
    let response = await courseApi.getAnswers(courseId);
    if(response)
        dispatch(setAnswers(response.answers));
}

export const checkAnswer = (data) => async (dispatch) => {
    let response = await courseApi.checkAnswer(data);
    dispatch(getCourseAnswers(response.courseId));

}

export const setCourseData = (data) => {
    return {
        type: SET_COURSE_DATA,
        payload: {...data}
    }
}
export const setAllCourses = (data) => {
    return {
        type: SET_ALL_COURSES,
        payload: {all: data}
    }
}
export const resetCourseData = () => {
    return {
        type: RESET_COURSE_DATA,
        payload: {...initialState}
    }
}
export const setCourseModules = (lessons, tasks, tests) => {
    return {
        type: SET_COURSE_MODULES,
        payload: {
            modules: {
                lessons,
                tasks,
                tests
            }
        }
    }
}

export const setAnswers = (answers) => {
    return {
        type: SET_ANSWERS,
        payload: {
            answers
        }
    }
}

export default courseReducer;