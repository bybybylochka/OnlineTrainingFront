import React from 'react';
import MentorHighlight from "./MentorHighlight";
import plus from '../../../assets/plus.png';
import MentorForm from "./MentorForm";
import {getMentors} from "../../../reducers/partnerReducer";
import {addMentor, editMentor, resetMentorData} from "../../../reducers/mentorReducer";
import Modal from "../../modal/Modal";
import usePartnerItems from "../../../hooks/usePartnerItems";

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

    return (
        <div className={'partner-mentors'}>
            <p className={'account__title'}>Ваши преподаватели</p>
            {isEditing
                ? <MentorForm isAdding={isAdding} onSubmit={onSubmit} mentorId={id} setIsEditing={setIsEditing}
                              setIsAdding={setIsAdding}/>
                : <div className={'partner-mentors__content'}>
                    <button className={'partner-mentors__adding-button button button_transparent'} onClick={onClickAdd}>
                        <img src={plus} alt={'plus'}/>
                        Добавить преподавателя
                    </button>
                    <div className={'partner-mentors__mentors'}>
                        {
                            items.map((mentor, index) => <MentorHighlight
                                mentor={mentor}
                                key={index}
                                onClick={() => onClick(mentor)}/>)
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