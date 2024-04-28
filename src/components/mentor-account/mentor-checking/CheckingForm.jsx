import {useFormik} from "formik";
import React from "react";

const validate = values => {
    const errors = {};

    if (!values.mark) {
        errors.mark = 'Это поле обязательное';
    }
    if (!values.feedback) {
        errors.feedback = 'Это поле обязательное';
    }
    return errors;
};

const CheckingForm = ({id, mark, feedback, onSubmit}) => {

    const formik = useFormik({
        initialValues: {
            id,
            mark: '',
            feedback: '',
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        mark ? <div className={'work__details'}>
                <p><span>Оценка:</span> {mark}</p>
                <p><span>Комментарий:</span> {feedback}</p>
            </div> :
            <form onSubmit={formik.handleSubmit} className={'checking-form'}>
                <input className={formik.touched.mark && formik.errors.mark ? 'errorField' : ''}
                       id="mark"
                       name="mark"
                       placeholder="Оценка"
                       type="number"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.mark}
                />
                {formik.touched.mark && formik.errors.mark ? (
                    <div className={'errorText'}>{formik.errors.mark}</div>
                ) : null}

                <textarea className={formik.touched.feedback && formik.errors.feedback ? 'errorField' : ''}
                          id="feedback"
                          name="feedback"
                          placeholder="Комментарий"
                          rows={10}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.feedback}
                />
                {formik.touched.feedback && formik.errors.feedback ? (
                    <div className={'errorText'}>{formik.errors.feedback}</div>
                ) : null}

                <button className={'button button_colored'} type="submit">Проверить</button>
            </form>
    );
};

export default CheckingForm;