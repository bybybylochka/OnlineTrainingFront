import React from 'react';
import useTestForm from "../../../hooks/useTestForm";

const TestForm = ({testId, isAdding, setIsAdding, setIsEditing, setModalActive}) => {
    const {formik, renderQuestionFields, course} = useTestForm({
        testId,
        isAdding,
        setIsAdding,
        setIsEditing,
        setModalActive
    });

    return (
        <form onSubmit={formik.handleSubmit} className="course-form" encType="multipart/form-data">
            <input
                className={formik.touched.name && formik.errors.name ? 'errorField' : ''}
                id="name"
                name="name"
                placeholder="Название"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="errorText">{formik.errors.name}</div>
            ) : null}

            <input
                className={formik.touched.estimatedTime && formik.errors.estimatedTime ? 'errorField' : ''}
                id="estimatedTime"
                name="estimatedTime"
                placeholder="Время прохождения"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.estimatedTime}
            />
            {formik.touched.estimatedTime && formik.errors.estimatedTime ? (
                <div className="errorText">{formik.errors.estimatedTime}</div>
            ) : null}

            <input
                className={formik.touched.questionCount && formik.errors.questionCount ? 'errorField' : ''}
                id="questionCount"
                name="questionCount"
                placeholder="Количество вопросов"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.questionCount}
            />
            {formik.touched.questionCount && formik.errors.questionCount ? (
                <div className="errorText">{formik.errors.questionCount}</div>
            ) : null}
            <div className={'questions'}>
                {renderQuestionFields()}
            </div>

            <button className="button button_colored" type="submit"
                    disabled={!formik.dirty || course.status !== 'NOT_FILLED_IN'}>
                Сохранить
            </button>
        </form>
    );
};

export default TestForm;