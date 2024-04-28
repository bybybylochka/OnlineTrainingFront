import React, {useEffect} from "react";
import arrow from "../../assets/arrowToCourses.png";
import {useDispatch, useSelector} from "react-redux";
import {categories} from "../categories/categories-data";
import MentorHighlight from "../partner-account/partner-mentors/MentorHighlight";
import ModuleHighlight from "../mentor-account/mentor-courses/ModuleHighlight";
import {getCourseModules} from "../../reducers/courseReducer";
import {NavLink, Route} from "react-router-dom";
import AfterPayment from "../after-payment/AfterPayment";

const Course = ({onBack}) => {
    const course = useSelector(state => state.course);
    const purchasedCourses = useSelector(state => state.student.purchasedCourses);
    const role = useSelector(state => state.auth.role);

    return (

        <div className={'course'}>
            {course.name && <div className={'course__wrapper wrapper'}>
                <div className={'modules__title'}>
                    <button className={'button back button_transparent'} onClick={onBack}>
                        <img src={arrow} alt={'arrow back'}/>
                    </button>
                    <p>Курс: {course.name}</p>
                </div>
                <div className={'course__content'}>
                    <img className={'course__image'} src={`data:image/jpeg;base64,${course.image}`}
                         alt={'course image'}/>
                    <div className={'course__info'}>
                        <p className={'course__name'}>{course.name}</p>
                        <p className={'course__category'}
                           style={{color: categories.find(c => c.value === course.category).color}}>
                            Категория: {categories.find(c => c.value === course.category).title}
                        </p>
                        <p className={'course__description'}><i>{course.description}</i></p>
                        <p className={'course__price'}>Всего {course.price} BYN</p>
                        <p className={'course__mentor-title'}>Преподаватель курса</p>
                        <MentorHighlight mentor={course.mentor}/>
                        <p className={'course__modules-title'}>Программа курса</p>
                        <div className={'course__modules'}>
                            {course.modules.lessons.map(module => <ModuleHighlight module={module}/>)}
                        </div>
                        <NavLink to={course.paymentLink}>
                            <button className={'button button_colored'}
                                    disabled={role!=='ROLE_STUDENT'
                                        || purchasedCourses.find(purchasedCourse => course.id===purchasedCourse.courseId)}>
                                Приобрести</button>
                        </NavLink>
                        <p className={'course__partner'}>Организатор курса: {course.entrepreneur.name}</p>
                    </div>
                </div>

            </div>
            }
        </div>
    )
}

export default Course;