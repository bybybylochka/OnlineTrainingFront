import React from 'react';
import {NavLink} from "react-router-dom";

const CategoryHighlight = ({category}) => {
    return (
        <NavLink to={category.path}>
            <div className={'category-highlight'}>
                <img className={'category-highlight__image'} style={{backgroundColor: category.color}}
                     src={category.icon} alt={'category-highlight icon'}/>
                <p className={'category-highlight__text'}>{category.title}</p>
            </div>
        </NavLink>
    )
}

export default CategoryHighlight;