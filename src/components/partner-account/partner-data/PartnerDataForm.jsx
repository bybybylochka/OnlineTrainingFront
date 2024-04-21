import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {getPartnerData} from "../../../reducers/partnerReducer";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.UNP) {
        errors.UNP = 'Это поле обязательное';
    }
    return errors;
};

const PartnerDataForm = ({onSubmit}) => {
    const name = useSelector((state) => state.partner.name);
    const UNP = useSelector((state) => state.partner.UNP);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPartnerData());
    }, [dispatch, name, UNP])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: name,
            UNP: UNP,
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className={'partner-data-form'}>
            <input className={ formik.touched.login && formik.errors.login ? 'errorField': '' }
                   id="name"
                   name="name"
                   placeholder="Наименование"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={'errorText'}>{formik.errors.name}</div>
            ) : null}

            <input className={ formik.touched.UNP && formik.errors.UNP ? 'errorField': '' }
                   id="UNP"
                   name="UNP"
                   placeholder="УНП"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.UNP}
            />
            {formik.touched.UNP && formik.errors.UNP ? (
                <div className={'errorText'}>{formik.errors.UNP}</div>
            ) : null}
            <button className={'button button_colored'} type="submit" disabled={!formik.dirty}>Сохранить</button>
        </form>
    );
};

export default PartnerDataForm;