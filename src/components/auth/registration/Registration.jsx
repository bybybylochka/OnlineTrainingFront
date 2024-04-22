import React, {useState} from 'react';
import formImage from "../../../assets/formImage.png";
import {useDispatch} from "react-redux";
import {register} from "../../../reducers/authReducer";
import StudentRegistrationForm from "./StudentRegistrationForm";
import PartnerRegistrationForm from "./PartnerRegistrationForm";
import {NavLink} from "react-router-dom";

const Registration = () => {
    const [role, setRole] = useState('student');
    const [isRegistered, setIsRegistered] = useState(false);
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(register(role, formData));
        setIsRegistered(true)
    }
    if (isRegistered) return <NavLink to={'/login'}/>
    return (
        <div className={'auth'}>
            <div className={'auth__wrapper wrapper'}>
                <img className={'auth__image'} src={formImage} alt={'login image'}/>
                <div className={'auth__form-container'}>
                    <p className={'form-container__title'}>Зарегистрироваться как:</p>
                    <div className={'auth__registration-buttons'}>
                        <button className={role === 'student' ? 'button button_colored' : 'button button_transparent'}
                                onClick={() => setRole('student')}>Студент
                        </button>
                        <button
                            className={role === 'entrepreneur' ? 'button button_colored' : 'button button_transparent'}
                            onClick={() => setRole('entrepreneur')}>Партнер
                        </button>
                    </div>
                    {role === 'student' ? <StudentRegistrationForm onSubmit={onSubmit}/> :
                        <PartnerRegistrationForm onSubmit={onSubmit}/>}
                </div>
            </div>
        </div>
    )
}

export default Registration;