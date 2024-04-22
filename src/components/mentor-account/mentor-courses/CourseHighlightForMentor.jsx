import {categories} from "../../categories/categories-data";
import {statusTypes} from "../../utils/status";
import React from "react";

const CourseHighlightForMentor = ({course, onClick, onSend}) => {
    return (
        <div className={'course-highlight'} onClick={onClick}>
            <div className={'course-highlight__wrapper'}>
                <img className={'course-highlight__image'} src={`data:image/jpeg;base64,${course.image}`}
                     alt={'course highlight image'}/>
                <div className={'course-highlight__content'}>
                    <p className={'course-highlight__name'}>
                        {course.name}
                    </p>
                    <p className={'course-highlight__category'}>{categories.find(category => category.value === course.category).title}</p>
                    <p className={'course-highlight__status'}>
                        {statusTypes.find(status => status.value === course.status).title}
                    </p>
                    <button className={'button button_transparent'}
                            disabled={!(course.status === 'NOT_FILLED_IN')}
                            onClick={onSend}>
                        Отправить на проверку
                    </button>
                    <div className={'course-highlight__bottom'}>
                        <div className={'course-highlight__mentor'}>
                            <img className={'course-highlight__mentor-avatar'}
                                 src={`data:image/jpeg;base64,${course.mentor.image}`} alt={'avatar'}/>
                            <p className={'course-highlight__mentor-name'}>{course.mentor.fullName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHighlightForMentor;