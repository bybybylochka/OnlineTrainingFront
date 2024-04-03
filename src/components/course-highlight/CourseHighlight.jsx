import React from 'react';
import icon from '../../assets/highlightIconInside.png'
import avatar from '../../assets/avatar.png'
import course_image from '../../assets/highlightImage.png'

const CourseHighlight = () => {
    return(
        <div className={'course-highlight'}>
            <div className={'course-highlight__wrapper'}>
                <img className={'course-highlight__image'} src={course_image} alt={'course highlight image'} />
                <div className={'course-highlight__content'}>
                    <div className={'course-highlight__volume'}>
                        <img className={'course-highlight__volume-icon'} src={icon} alt={'play'}/>
                        <p className={'course-highlight__volume-text'}>30 уроков</p>
                    </div>
                    <p className={'course-highlight__name'}>
                        Программирование для всех (основы Питона)
                    </p>
                    <p className={'course-highlight__category'}>Программирование</p>
                    <div className={'course-highlight__bottom'}>
                        <div className={'course-highlight__mentor'}>
                            <img className={'course-highlight__mentor-avatar'} src={avatar} alt={'avatar'}/>
                            <p className={'course-highlight__mentor-name'}>Данила Соколовский</p>
                        </div>
                        <button className={'button button_colored'}>Перейти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHighlight;