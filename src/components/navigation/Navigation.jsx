import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={'navigation'}>
            <ul className={'navigation__list'}>
                <NavLink to={'/'} className={'navigation__link'}>
                    Главная
                </NavLink>
                <NavLink to={'/about-us'} className={'navigation__link'}>
                    О нас
                </NavLink>
                <NavLink to={'/courses'} className={'navigation__link'}>
                    Курсы
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navigation;