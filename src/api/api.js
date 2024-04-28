import axios from "axios";

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
    logout() {
        return authInstance.get('/logout')
            .then(response => response.data)
            .catch(() => alert('Ошибка авторизации: невозможно выполнить выход'));
    },
    register(role, data) {
        return registrationInstance.post(`/${role}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка регистрации: данный пользователь уже существует'));
    },
    me(validationRequest) {
        return authInstance.post('/me', validationRequest)
            .then(response => response.data)
            .catch(() => alert('Ошибка авторизации: некорректный токен'));
    }
}

export const partnerApi = {
    getPartner() {
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
    getMentor() {
        return instance.get('/mentors/data')
            .then(response => response.data)
            .catch(() => alert('Ошибка ментора: не удалось получить информацию'));
    },
    editMentorData(data) {
        return instance.put(`/mentors/${data.mentorId}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    },
    addMentor(data) {
        return instance.post('/registration/mentor', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
            .catch(() => alert('Ошибка addMentor'));
    },
    getCourses() {
        return instance.get('/courses/mentor')
            .then(response => response.data)
            .catch((error) => console.log(error))
    }
}

export const courseApi = {
    getAllCourses() {
        return instance.get(`/courses`)
            .then(response => response.data)
            .catch(() => alert('Ошибка getCourses'));
    },
    getCourseData(courseId) {
        return instance.get(`/courses/${courseId}`)
            .then(response => response.data)
            .catch(() => alert('Ошибка getCourseData'));
    },
    editCourseData(data) {
        return instance.put(`/courses/${data.courseId}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    },
    addCourse(data) {
        return instance.post('/courses', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
            .catch(() => alert('Ошибка addMentor'));
    },
    deactivateCourse(courseId) {
        return instance.put(`/courses/status/${courseId}`, null, {params: {courseStatus: 'INACTIVE'}})
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    },
    approveCourse(courseId) {
        return instance.put(`/courses/status/${courseId}`, null, {params: {courseStatus: 'APPROVED'}})
            .then(response => response.data)
            .catch(() => alert('Ошибка approveCourse'));
    },
    sendCourse(courseId) {
        return instance.put(`/courses/status/${courseId}`, null, {params: {courseStatus: 'FILLED_IN'}})
            .then(response => response.data)
            .catch(() => alert('Ошибка editMentorData'));
    },
    getModules(courseId) {
        return instance.get(`/course-units/course/${courseId}`)
            .then(response => response.data)
            .catch(() => console.log('modules error'));
    },
    getLessons(courseId) {
        return instance.get(`/lessons/course/${courseId}`)
            .then(response => response.data)
            .catch(() => console.log('modules error'));
    },
    getTasks(courseId) {
        return instance.get(`/tasks/course/${courseId}`)
            .then(response => response.data)
            .catch(() => console.log('modules error'));
    },
    getTests(courseId) {
        return instance.get(`/tests/course/${courseId}`)
            .then(response => response.data)
            .catch(() => console.log('modules error'));
    },
    getAnswers(courseId) {
        return instance.get(`/answers/course/${courseId}`)
            .then(response => response.data)
            .catch((error) => console.log(error));
    },
    checkAnswer(data) {
        return instance.post(`/answers/check`, data)
            .then(response => response.data)
            .catch((error) => console.log(error));
    },
    purchaseCourse(courseId) {
        return instance.post(`/purchased-courses`, {courseId})
            .then(response => response.data)
            .catch((error) => console.log(error));
    }
}

export const modulesApi = {
    getLesson(lessonId) {
        return instance.get(`/lessons/${lessonId}`)
            .then(response => response.data)
            .catch(() => console.log('lessons error'));
    },
    addLesson(data) {
        return instance.post('/lessons', data)
            .then(response => response.data)
            .catch(() => alert('Ошибка addLesson'));
    },
    editLesson(data) {
        return instance.put(`/lessons/${data.lessonId}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editLesson'));
    },
    getTask(taskId) {
        return instance.get(`/tasks/${taskId}`)
            .then(response => response.data)
            .catch(() => console.log('lessons error'));
    },
    addTask(data) {
        return instance.post('/tasks', data)
            .then(response => response.data)
            .catch(() => alert('Ошибка addLesson'));
    },
    editTask(data) {
        return instance.put(`/tasks/${data.taskId}`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editLesson'));
    },
    getTest(testId) {
        return instance.get(`/tests/${testId}`)
            .then(response => response.data)
            .catch(() => console.log('lessons error'));
    },
    addTest(data) {
        return instance.post('/tests', data)
            .then(response => response.data)
            .catch(() => alert('Ошибка addLesson'));
    },
    editTest(data) {
        return instance.put(`/tests`, data)
            .then(response => response.data)
            .catch(() => alert('Ошибка editLesson'));
    }
}

