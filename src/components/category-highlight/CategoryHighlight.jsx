import React from 'react';
import icon from '../../assets/categoryIcon.png'

const CategoryHighlight = () => {
    return (
        <div className={'category-highlight'}>
            <img className={'category-highlight__image'} src={icon} alt={'category-highlight icon'}/>
            <p className={'category-highlight__text'}>Программирование</p>
        </div>
    )
}

export default CategoryHighlight;