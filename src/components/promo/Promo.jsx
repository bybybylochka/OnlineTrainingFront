import React from 'react'
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

const Promo = () => {
    return (
        <div className={'promo'}>
            <div className={'promo__wrapper wrapper'}>
                <h2 className={'promo__title'}>
                    Преподавание в эпоху Интернета означает, что мы должны обучать навыкам <span>завтрашнего дня</span> <span>сегодня</span>
                </h2>
                <div className={'promo__text'}>
                    Предоставляет вам новейшую систему онлайн-обучения и материалы, которые помогут вам.<br/>
                    Присоединиться как:
                </div>
                <div className={'promo__buttons'}>
                    <button className={'button button_colored'}>Студент</button>
                    <button className={'button button_colored'}>Партнер</button>
                </div>
            </div>
        </div>
    )
}

export default Promo;