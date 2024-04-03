import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080`
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authApi = {
    login(login, password) {
        return instance.post('/authorization/login', {login, password})
            .then(response => response.data)
            .catch(() => alert('Ошибка авторизации: неверный логин или пароль'));
    },
    logout(){
        return instance.get('/authorization/logout')
            .then(response => response.data)
            .catch(()=>alert('Ошибка авторизации: невозможно выполнить выход'));
    },
    register(role, data){
        return instance.post(`/registration/${role}`, data, {headers: null})
            .then(response => response.data)
            .catch(()=>alert('Ошибка регистрации: данный пользователь уже существует'));
    },
    me(validationRequest) {
        return instance.post('/authorization/me', validationRequest, {headers: null})
            .then(response => response.data)
            .catch(() => alert('Ошибка авторизации: некорректный токен'));
    }
}