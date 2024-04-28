import React from 'react'
import {NavLink} from "react-router-dom";

const Promo = () => {
    return (
        <div className={'promo'}>
            <div className={'promo__wrapper wrapper'}>
                <h2 className={'promo__title'}>
                    Преподавание в эпоху Интернета означает, что мы должны обучать навыкам <span>завтрашнего дня</span>
                    <span>сегодня</span>
                </h2>
                <div className={'promo__text'}>
                    Предоставляет вам новейшую систему онлайн-обучения и материалы, которые помогут вам.<br/>
                    Присоединиться как:
                </div>
                <div className={'promo__buttons'}>
                    <NavLink to={'/register'}>
                        <button className={'button button_colored'}>Студент</button>
                    </NavLink>
                    <NavLink to={'/register'}>
                        <button className={'button button_colored'}>Партнер</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Promo;