import axios from "axios";
import {isRouteErrorResponse} from "react-router-dom";

const authInstance = axios.create({
    baseURL: `http://localhost:8080/authorization`
})

const registrationInstance = axios.create({
    baseURL: 'http://localhost:8080/registration'
})

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})


instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authApi = {
    login(login, password) {
        return authInstance.post('/login', {login, password})
            .then(response => response.data)
            .catch(() => alert('Ошибка авторизации: неверный логин или пароль'));
    },
    logout(){
        return authInstance.get('/logout')
            .then(response => response.data)
            .catch(()=>alert('Ошибка авторизации: невозможно выполнить выход'));
    },
    register(role, data){
        return registrationInstance.post(`/${role}`, data)
            .then(response => response.data)
            .catch(()=>alert('Ошибка регистрации: данный пользователь уже существует'));
    },
    me(validationRequest) {
        return authInstance.post('/me', validationRequest)
            .then(response => response.data)
            .catch(() => alert('Ошибка авторизации: некорректный токен'));
    }
}

export const partnerApi = {
    getPartnerData() {
        return instance.get('/entrepreneurs/data')
            .then(response => response.data)
            .catch(() => alert('Ошибка партнера: не удалось получить информацию'));
    },
    editPartnerData(data) {
        return instance.put('/entrepreneurs', data)
            .then(response => response.data)
            .catch(() => alert('Ошибка партнера: не удалось обновить информацию'))
    },
    getMentors() {
        return instance.get('/mentors/entrepreneur')
            .then(response => response.data)
            .catch((error) => console.log(error))
    },
    getCourses() {
        return instance.get('/courses/entrepreneur')
            .then(response => response.data)
            .catch((error) => console.log(error))
    }
}

export const mentorApi = {
    getMentorData(mentorId) {
        return instance.get(`/mentors/${mentorId}`)
            .then(response => response.data)
            .catch(() => alert('Ошибка getMentorData'));
    },
    editMentorData(data) {
        return instance.put(`/mentors/${data.mentorId}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    },
    addMentor(data) {
        return instance.post('/registration/mentor', data,  {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => response.data)
            .catch(() => alert('Ошибка addMentor'));
    }
}

export const courseApi = {
    getCourseData(courseId) {
        return instance.get(`/courses/${courseId}`)
            .then(response => response.data)
            .catch(() => alert('Ошибка getMentorData'));
    },
    editCourseData(data) {
        return instance.put(`/courses/${data.courseId}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    },
    addCourse(data) {
        return instance.post('/courses', data,  {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => response.data)
            .catch(() => alert('Ошибка addMentor'));
    },
    deactivateCourse(courseId) {
        return instance.put(`/courses/status/${courseId}`, null,{params: {courseStatus: 'INACTIVE'}} )
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    }
}

