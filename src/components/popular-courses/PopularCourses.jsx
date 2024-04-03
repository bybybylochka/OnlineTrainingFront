import React from 'react'
import arrow from '../../assets/arrowToCourses.png';
import CourseHighlight from "../course-highlight/CourseHighlight";

const PopularCourses = () => {
    return (
        <div className={'popular-courses'}>
            <div className={'popular-courses__wrapper wrapper'}>
                <div className={'popular-courses__header'}>
                    <div>
                        <h3 className={'popular-courses__title'}>Наши самые <span>популярные курсы</span></h3>
                        <div className={'popular-courses__text'}>
                            Присоединяйтесь к нашим лучшим занятиям с нашим знаменитым менторами и партнерами
                        </div>
                    </div>
                    <a className={'popular-courses__button'} href={'#'}>
                        <button className={'button button_transparent'}>
                            Изучить курсы
                            <img src={arrow} alt={'arrow'}/>
                        </button>
                    </a>
                </div>
                <div className={'popular-courses__courses'}>
                    <CourseHighlight/>
                    <CourseHighlight/>
                    <CourseHighlight/>
                    <CourseHighlight/>
                    <CourseHighlight/>
                    <CourseHighlight/>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;