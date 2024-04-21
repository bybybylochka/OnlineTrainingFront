import React, {useEffect, useState} from 'react';
import MentorHighlight from "./MentorHighlight";
import plus from '../../../assets/plus.png';
import MentorForm from "./MentorForm";
import {useDispatch, useSelector} from "react-redux";
import {getCourses, getMentors} from "../../../reducers/partnerReducer";
import {addMentor, editMentor, resetMentorData} from "../../../reducers/mentorReducer";
import Modal from "../../modal/Modal";
import usePartnerItems from "../../../hooks/usePartnerItems";
import {addCourse, deactivateCourse, editCourse, resetCourseData} from "../../../reducers/courseReducer";

const PartnerMentors = () => {
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
    } = usePartnerItems('mentors', resetMentorData, getMentors, addMentor, editMentor);
    // const [modalActive, setModalActive] = useState(false);
    // const [isEditing, setIsEditing] = useState(false);
    // const [isAdding, setIsAdding] = useState(false);
    // const [mentorId, setMentorId] = useState('');
    // const mentors = useSelector((state) => state.partner.mentors);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(resetMentorData())
    //     dispatch(getMentors());
    // }, [dispatch])
    // const onClickAdd = () => {
    //     setIsEditing(true)
    //     setIsAdding(true)
    // }
    // const onSubmit = (formData) => {
    //     formData.isAdding ? dispatch(addMentor(formData)) : dispatch(editMentor(formData))
    //     dispatch(resetMentorData());
    //     setModalActive(true);
    //     setIsEditing(false);
    //     setIsAdding(false);
    // }
    return (
        <div className={'partner-mentors'}>
            <p className={'partner-account__title'}>Ваши преподаватели</p>
            {isEditing
                ? <MentorForm isAdding={isAdding} onSubmit={onSubmit} mentorId={id} setIsEditing={setIsEditing} setIsAdding={setIsAdding}/>
                : <div className={'partner-mentors__content'}>
                    <button className={'partner-mentors__adding-button button button_transparent'} onClick={onClickAdd}>
                        <img src={plus} alt={'plus'}/>
                        Добавить преподавателя
                    </button>
                    <div className={'partner-mentors__mentors'}>
                        {
                            items.map((mentor, index)=> <MentorHighlight
                                mentor={mentor}
                                key={index}
                                onClick={()=> onClick(mentor)}/>)
                        }
                    </div>
                </div>
            }
            <Modal active={modalActive} setActive={setModalActive}>
                <div>Преподаватель сохранен успешно!</div>
            </Modal>
        </div>
    )
}

export default PartnerMentors;