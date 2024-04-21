import React from 'react'
import LoginForm from "./LoginForm";
import formImage from '../../../assets/formImage.png'
import {login} from "../../../reducers/authReducer";
import {useDispatch} from "react-redux";
import Navigation from "../../navigation/Navigation";
import {Navigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const onSubmit = (formData) =>{
        dispatch(login(formData.login, formData.password));
        return <Navigate to={'/'}/>
    }

    return (
        <div className={'auth'}>
            <div className={'auth__wrapper wrapper'}>
                <img className={'auth__image'} src={formImage} alt={'login image'}/>
                <div className={'auth__form-container'}>
                    <p className={'form-container__title'}>Войти в личный кабинет</p>
                    <LoginForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Login;