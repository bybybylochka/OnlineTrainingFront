import React, {useEffect, useState} from 'react';
import CourseHighlightForMentor from "../mentor-courses/CourseHighlightForMentor";
import {useDispatch, useSelector} from "react-redux";
import {getMentorCourses} from "../../../reducers/mentorReducer";
import {getCourseAnswers, getCourseData} from "../../../reducers/courseReducer";
import CourseModules from "../mentor-courses/CourseModules";
import StudentWork from "./StudentWork";
import Modal from "../../modal/Modal";
import arrow from "../../../assets/arrowToCourses.png";
import {resetLessonData} from "../../../reducers/lessonReducer";
import {resetTaskData} from "../../../reducers/taskReducer";
import {resetTestData} from "../../../reducers/testReducer";

const MentorChecking = () => {
    const [isCourseActive, setIsCourseActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [id, setId] = useState('');
    const courses = useSelector((state) => state.mentor.courses)
    const course = useSelector((state) => state.course)
    const answers = useSelector((state) => state.course.answers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMentorCourses())
    }, [dispatch])
    const onClick = (course) => {
        dispatch(getCourseData(course.id))
        dispatch(getCourseAnswers(course.id))
        setIsCourseActive(true);
        setId(course.id);
    }
    const onBack = () => {
        setIsCourseActive(false);
    }
    return (
        <div className={'mentor-checking'}>
            <p className={'account__title'}>
                Проверка работ студентов
            </p>
            {isCourseActive?<div className={'modules__title'}>
                <button className={'button back button_transparent'} onClick={onBack}>
                    <img src={arrow} alt={'arrow back'}/>
                </button>
                <p>Курс: {course.name}</p>
            </div>:''}
            <div className={'mentor-checking__content'}>
                {isCourseActive
                    ? answers.map((answer) => <StudentWork answer={answer} setModalActive={setModalActive}/>)
                    :
                    <div className={'mentor-checking__courses'}>
                        {
                            courses.map((course, index) => <CourseHighlightForMentor
                                course={course}
                                key={index}
                                onClick={() => onClick(course)}
                                withoutButton={true}
                            />)
                        }
                    </div>}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>Работа проверена успешно!</div>
            </Modal>
        </div>
    )
}

export default MentorChecking