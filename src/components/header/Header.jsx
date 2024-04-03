import React, {useEffect} from 'react';
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/authReducer";


const Header = () => {
    const isAuth = useSelector((state)=>state.auth.isAuth);
    console.log(isAuth);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(logout());
    }
    return (
        <header className={'header'}>
            <div className={'header__wrapper wrapper'}>
                <div className={'header__logo'}>
                    <Logo/>
                </div>
                <div className={'header__navigation'}>
                    <Navigation/>
                </div>
                {isAuth?
                    <div className={'header__buttons'}>
                        <NavLink to={'/student-account'}><button className={'button button_colored'}>Личный кабинет</button></NavLink>
                        <NavLink to={'/'}><button className={'button button_transparent'} onClick={onClick}>Выйти</button></NavLink>
                    </div>
                        :
                    <div className={'header__buttons'}>
                     <NavLink to={'/login'}><button className={'button button_colored'}>Войти</button></NavLink>
                     <NavLink to={'/register'}><button className={'button button_transparent'}>Зарегистрироваться</button></NavLink>
                    </div>
                    }
            </div>
        </header>
    )
}

export default Header;