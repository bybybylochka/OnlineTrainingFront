import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {approveCourse, getCoursesToBeChecked} from "../../../reducers/adminReducer";
import CourseHighlightForAdmin from "./CourseHighlightForAdmin";
import {getCourseData, getCourseModules} from "../../../reducers/courseReducer";
import arrow from "../../../assets/arrowToCourses.png";
import Lesson from "./Lesson";
import Modal from "../../modal/Modal";
import Task from "./Task";
import Test from "./Test";

const AdminCourses = () => {
    let courses = useSelector(state => state.admin.coursesToBeChecked);
    const [isCourseActive, setIsCourseActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [id, setId] = useState('');
    const course = useSelector((state) => state.course);
    const lessons = useSelector((state) => state.course.modules.lessons);
    const tasks = useSelector((state) => state.course.modules.tasks);
    const tests = useSelector((state) => state.course.modules.tests);
    const onClick = (course) => {
        dispatch(getCourseData(course.id))
        dispatch(getCourseModules(course.id))
        setIsCourseActive(true);
        setId(course.id);
    }
    const onApprove = (courseId) => {
        dispatch(approveCourse(courseId));
        setIsCourseActive(false);
        setModalActive(true);
    }
    const onBack = () => {
        setIsCourseActive(false);
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoursesToBeChecked());
    }, [dispatch])
    return (
        <div className={'admin-courses'}>
            <p className={'account__title'}>Проверка курсов</p>
            {isCourseActive ? <div className={'modules__title'}>
                <button className={'button back button_transparent'} onClick={onBack}>
                    <img src={arrow} alt={'arrow back'}/>
                </button>
                <p>Курс: {course.name}</p>
            </div> : ''}
            {isCourseActive
                ?
                <div className={'admin-courses__content'}>
                    <p><span>Описание:</span> {course.description}</p>
                    <p><span>Стоимость:</span> {course.price} BYN</p>
                    <p><span>Преподаватель:</span> {course.mentor.fullName}</p>
                    <p><span>Содержание:</span></p>
                    <div className={'admin-courses__modules'}>
                        {lessons.map((lesson, index) => <Lesson lesson={lesson} key={index}/>)}
                        {tasks.map((task, index) => <Task task={task} key={index}/>)}
                        {tests.map((test, index) => <Test test={test} key={index}/>)}

                    </div>
                    <button className={'button button_colored'} onClick={() => onApprove(id)}>Одобрить</button>
                </div>
                :
                <div className={'admin-courses__items'}>
                    {courses.map((course, index) => (<CourseHighlightForAdmin
                        course={course}
                        onClick={() => onClick(course)}
                        key={index}/>))}
                </div>
            }

            <Modal active={modalActive} setActive={setModalActive}>
                <div>Курс проверен успешно!</div>
            </Modal>
        </div>
    )
}

export default AdminCourses;