import React, {useState} from 'react';
import PartnerDataForm from "./PartnerDataForm";
import {useDispatch} from "react-redux";
import {editPartnerData} from "../../../reducers/partnerReducer";
import Modal from "../../modal/Modal";

const PartnerData = () => {
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(editPartnerData(formData));
        setModalActive(true);
    }
    return (
        <div className={'partner-data'}>
            <p className={'account__title'}>
                Данные партнера
            </p>
            <div className={'partner-data__content'}>
                <PartnerDataForm onSubmit={onSubmit}/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>Данные изменены успешно!</div>
            </Modal>
        </div>
    )
}

export default PartnerData;