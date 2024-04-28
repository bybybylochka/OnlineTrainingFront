import React, {useEffect, useState} from 'react';
import SearchForm from "./SearchForm";
import CourseHighlight from "../course-highlight/CourseHighlight";
import {useDispatch, useSelector} from "react-redux";
import {getAllCourses, getCourseData, getCourseModules} from "../../reducers/courseReducer";
import arrow from "../../assets/arrowToCourses.png";
import Course from "./Course";

const Courses = () => {
    const courses = useSelector(state => state.course.all);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [isCourseActive, setIsCourseActive] = useState(false);
    const [id, setId] = useState('');
    console.log(courses);
    console.log(filteredCourses);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCourses());
         //!!!!!
    }, [dispatch])
    useEffect(()=> {
        setFilteredCourses(courses);
    }, [courses])
    const onBack = () => {
        setIsCourseActive(false);
    }
    const onClick = (course) => {
        dispatch(getCourseData(course.id))
        dispatch(getCourseModules(course.id))
        setIsCourseActive(true);
        setId(course.id);
    }
    return (
        <div className={'courses'}>
            <div className={'courses__wrapper wrapper'}>
                <p className={'courses__title'}>Наши курсы</p>
                {isCourseActive
                    ? <Course onBack={onBack}/>
                    :
                    <div>
                        <SearchForm courses={courses} setFilteredCourses={setFilteredCourses}/>
                        <div className={'courses__items'}>
                            {filteredCourses.length === 0
                                ? <p className={'courses__items_empty'}>К сожалению, курсы с данными параметрами
                                    отсутствуют!</p>
                                : filteredCourses.map((course) => <CourseHighlight course={course}
                                                                                   onClick={() => onClick(course)}/>)
                            }

                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default Courses;