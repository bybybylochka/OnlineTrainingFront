import React from 'react';
import {NavLink} from "react-router-dom";

const AccountNavigation = ({list}) => {
    return (
        <nav className={'account-navigation'}>
            <p className={'account-navigation__title'}>Меню</p>
            <ul className={'account-navigation__list'}>
                {list.map((item, index) => (
                    <NavLink to={item.path} key={index} className={'account-navigation__link'}>
                        {item.title}
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default AccountNavigation;