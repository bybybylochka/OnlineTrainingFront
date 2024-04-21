import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../../reducers/partnerReducer";
import plus from "../../../assets/plus.png";
import Modal from "../../modal/Modal";
import CourseHighlightForPartner from "./CourseHighlightForPartner";
import CourseForm from "./CourseForm";
import usePartnerItems from "../../../hooks/usePartnerItems";
import {addCourse, deactivateCourse, editCourse, resetCourseData} from "../../../reducers/courseReducer";

const PartnerCourses = () => {
    const {
        modalActive,
        setModalActive,
        isEditing,
        setIsEditing,
        isAdding,
        setIsAdding,
        id,
        setId,
        items,
        onClickAdd,
        onSubmit,
        onClick,
        onDeactivate,
    } = usePartnerItems('courses', resetCourseData, getCourses, addCourse, editCourse, deactivateCourse);
    // const [modalActive, setModalActive] = useState(false);
    // const [isEditing, setIsEditing] = useState(false);
    // const [isAdding, setIsAdding] = useState(false);
    // const [courseId, setCourseId] = useState('');
    // const courses = useSelector((state) => state.partner.courses);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(resetCourseData());
    //     dispatch(getCourses());
    // }, [dispatch])
    // const onClickAdd = () => {
    //     setIsEditing(true)
    //     setIsAdding(true)
    // }
    // const onSubmit = (formData) => {
    //     formData.isAdding ? dispatch(addCourse(formData)) : dispatch(editCourse(formData))
    //     dispatch(resetCourseData())
    //     setModalActive(true);
    //     setIsEditing(false);
    //     setIsAdding(false);
    // }
    return (
        <div className={'partner-courses'}>
            <p className={'partner-account__title'}>Ваши курсы</p>
            {isEditing
                ? <CourseForm isAdding={isAdding} onSubmit={onSubmit} courseId={id} setIsAdding={setIsAdding} setIsEditing={setIsEditing}/>
                : <div className={'partner-courses__content'}>
                    <button className={'partner-courses__adding-button button button_transparent'} onClick={onClickAdd}>
                        <img src={plus} alt={'plus'}/>
                        Добавить курс
                    </button>
                    <div className={'partner-courses__courses'}>
                        {
                            items.map((course, index) => <CourseHighlightForPartner
                                course={course}
                                key={index}
                                onClick={() => onClick(course)}
                                onDeactivate={(e) => {
                                    e.stopPropagation();
                                    onDeactivate(course)
                                }}
                            />)
                        }
                    </div>
                </div>
            }
            <Modal active={modalActive} setActive={setModalActive}>
                <div>Курс сохранен успешно!</div>
            </Modal>
        </div>
    )
}

export default PartnerCourses;