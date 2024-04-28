import React from "react";

const Course = ({course}) => {
    return (
        <div className={'course'}>
            <div className={'course__info'}>
                <p className={'info__name'}>{course.name}</p>
                <p className={'info__description'}>{course.description}</p>
                <p className={'info__price'}>{course.price}</p>
                <p className={'info__mentor'}>{course.mentor.fullName}</p>
            </div>
            
        </div>
    )
}