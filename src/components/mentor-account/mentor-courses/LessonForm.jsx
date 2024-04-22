import React from 'react';
import useLessonForm from "../../../hooks/useLessonForm";

const LessonForm = ({lessonId, isAdding, setIsAdding, setIsEditing, setModalActive}) => {
    const {formik, course} = useLessonForm({
        lessonId,
        isAdding,
        setIsAdding,
        setIsEditing,
        setModalActive
    });
    return (
        <form onSubmit={formik.handleSubmit} className={'course-form'} encType={"multipart/form-data"}>
            <input className={formik.touched.name && formik.errors.name ? 'errorField' : ''}
                   id="name"
                   name="name"
                   placeholder="Название"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={'errorText'}>{formik.errors.name}</div>
            ) : null}
            <input className={formik.touched.estimatedTime && formik.errors.estimatedTime ? 'errorField' : ''}
                   id="estimatedTime"
                   name="estimatedTime"
                   placeholder="Время прохождения"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.estimatedTime}
            />
            {formik.touched.estimatedTime && formik.errors.estimatedTime ? (
                <div className={'errorText'}>{formik.errors.estimatedTime}</div>
            ) : null}
            <textarea className={formik.touched.content && formik.errors.content ? 'errorField' : ''}
                      id="content"
                      name="content"
                      placeholder={"Содержание"}
                      rows='15'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.content}
            />
            {formik.touched.content && formik.errors.content ? (
                <div className={'errorText'}>{formik.errors.content}</div>
            ) : null}
            <button className={'button button_colored'}
                    type="submit"
                    disabled={!formik.dirty || course.status !== 'NOT_FILLED_IN'}>
                Сохранить
            </button>
        </form>
    );
};

export default LessonForm;