import React from 'react';
import useTaskForm from "../../../hooks/useTaskForm";

const TaskForm = ({taskId, isAdding, setIsAdding, setIsEditing, setModalActive}) => {
    const {formik, course} = useTaskForm({
        taskId,
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
            <textarea className={formik.touched.description && formik.errors.description ? 'errorField' : ''}
                      id="description"
                      name="description"
                      placeholder={"Описание"}
                      rows='15'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
                <div className={'errorText'}>{formik.errors.description}</div>
            ) : null}
            <input className={formik.touched.maximumScore && formik.errors.maximumScore ? 'errorField' : ''}
                   id="maximumScore"
                   name="maximumScore"
                   placeholder="Максимальная оценка"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.maximumScore}
            />
            {formik.touched.maximumScore && formik.errors.maximumScore ? (
                <div className={'errorText'}>{formik.errors.maximumScore}</div>
            ) : null}
            <button className={'button button_colored'}
                    type="submit"
                    disabled={!formik.dirty || course.status !== 'NOT_FILLED_IN'}>
                Сохранить
            </button>
        </form>
    );
};

export default TaskForm;