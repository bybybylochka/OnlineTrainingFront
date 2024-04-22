import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMentorCourses} from "../../../reducers/mentorReducer";
import CourseHighlightForMentor from "./CourseHighlightForMentor";
import {getCourseData, sendCourse} from "../../../reducers/courseReducer";
import CourseModules from "./CourseModules";

const MentorCourses = () => {
    const [isCourseActive, setIsCourseActive] = useState(false);
    const [id, setId] = useState('');
    const courses = useSelector((state) => state.mentor.courses)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMentorCourses())
    }, [dispatch])
    const onSend = (item) => {
        dispatch(sendCourse(item.id));
        dispatch(getMentorCourses());
    };
    const onClick = (course) => {
        dispatch(getCourseData(course.id))
        setIsCourseActive(true);
        setId(course.id);
    }
    return (
        <div className={'mentor-courses'}>
            <p className={'account__title'}>Ваши курсы</p>
            <div className={'mentor-courses__content'}>
                {isCourseActive
                    ? <CourseModules setIsCourseActive={setIsCourseActive} courseId={id}/>
                    : <div className={'mentor-courses__courses'}>
                        {
                            courses.map((course, index) => <CourseHighlightForMentor
                                course={course}
                                key={index}
                                onClick={() => onClick(course)}
                                onSend={(e) => {
                                    e.stopPropagation();
                                    onSend(course)
                                }}
                            />)
                        }
                    </div>}
            </div>
        </div>
    )
}

export default MentorCourses;