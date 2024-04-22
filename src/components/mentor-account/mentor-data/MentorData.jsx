import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Modal from "../../modal/Modal";
import MentorDataForm from "./MentorDataForm";
import {editMentor} from "../../../reducers/mentorReducer";

const MentorData = () => {
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(editMentor(formData));
        setModalActive(true);
    }
    return (
        <div className={'mentor-data'}>
            <p className={'account__title'}>
                Данные преподавателя
            </p>
            <div className={'mentor-data__content'}>
                <MentorDataForm onSubmit={onSubmit}/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>Данные изменены успешно!</div>
            </Modal>
        </div>
    )
}

export default MentorData;