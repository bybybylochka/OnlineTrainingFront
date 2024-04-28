import React from 'react';
import icon from '../../assets/highlightIconInside.png'
import avatar from '../../assets/avatar.png'
import course_image from '../../assets/highlightImage.png'
import {categories} from "../categories/categories-data";

const CourseHighlight = ({course, onClick}) => {
    return (
        <div className={'course-highlight'} onClick={onClick}>
            <div className={'course-highlight__wrapper'}>
                <img className={'course-highlight__image'} src={`data:image/jpeg;base64,${course.image}`} alt={'course highlight image'}/>
                <div className={'course-highlight__content'}>
                    <div className={'course-highlight__volume'}>
                        <img className={'course-highlight__volume-icon'} src={icon} alt={'play'}/>
                        <p className={'course-highlight__volume-text'}>30 уроков</p>
                    </div>
                    <p className={'course-highlight__name'}>
                        {course.name}
                    </p>
                    <p className={'course-highlight__category'}>{categories.find(category => category.value === course.category).title}</p>
                    <p className={'course-highlight__cost'}>{course.price} BYN</p>
                    <div className={'course-highlight__bottom'}>
                        <div className={'course-highlight__mentor'}>
                            <img className={'course-highlight__mentor-avatar'} src={`data:image/jpeg;base64,${course.mentor.image}`} alt={'avatar'}/>
                            <p className={'course-highlight__mentor-name'}>{course.mentor.fullName}</p>
                        </div>
                        <button className={'button button_colored'}>Перейти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHighlight;