import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useFormik} from "formik";
import {getMentor} from "../../../reducers/mentorReducer";

const validate = values => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = 'Это поле обязательное';
    }
    if (!values.experience) {
        errors.experience = 'Это поле обязательное';
    }
    if (!values.characteristic) {
        errors.characteristic = 'Это поле обязательное';
    }
    if (!values.image) {
        errors.image = 'Это поле обязательное';
    }
    return errors;
};

const MentorDataForm = ({onSubmit}) => {
    const mentorId = useSelector((state) => state.mentor.id)
    const fullName = useSelector((state) => state.mentor.fullName);
    const experience = useSelector((state) => state.mentor.experience);
    const characteristic = useSelector((state) => state.mentor.characteristic);
    const image = useSelector((state) => state.mentor.image);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMentor());
    }, [dispatch, fullName, experience, characteristic, image])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            mentorId,
            fullName,
            experience,
            characteristic,
            image
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className={'mentor-data-form'}>
            <div className={'mentor-form__image-block'}>
                <img src={`data:image/jpeg;base64,${formik.values.image}`} alt={'avatar'}/>
            </div>
            <input className={formik.touched.fullName && formik.errors.fullName ? 'errorField' : ''}
                   id="fullName"
                   name="fullName"
                   placeholder="Полное имя"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
                <div className={'errorText'}>{formik.errors.fullName}</div>
            ) : null}

            <input className={formik.touched.experience && formik.errors.experience ? 'errorField' : ''}
                   id="experience"
                   name="experience"
                   placeholder="Опыт работы"
                   type="number"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.experience}
            />
            {formik.touched.experience && formik.errors.experience ? (
                <div className={'errorText'}>{formik.errors.experience}</div>
            ) : null}

            <textarea className={formik.touched.characteristic && formik.errors.characteristic ? 'errorField' : ''}
                      id="characteristic"
                      name="characteristic"
                      placeholder="Характеристика"
                      rows={15}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.characteristic}
            />
            {formik.touched.characteristic && formik.errors.characteristic ? (
                <div className={'errorText'}>{formik.errors.characteristic}</div>
            ) : null}
            <button className={'button button_colored'} type="submit" disabled={!formik.dirty}>Сохранить</button>
        </form>
    );
};

export default MentorDataForm;