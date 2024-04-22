import {useFormik} from "formik";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTest, editTest, getTest, resetTestData} from "../reducers/testReducer";

const useTestForm = ({testId, isAdding, setIsAdding, setIsEditing, setModalActive}) => {
    const name = useSelector(state => state.test.name);
    const estimatedTime = useSelector(state => state.test.estimatedTime);
    const questions = useSelector(state => state.test.questions);
    const courseId = useSelector(state => state.course.id);
    const course = useSelector(state => state.course);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetTestData());
        if (!isAdding) {
            dispatch(getTest(testId));
        }
    }, [dispatch, isAdding, testId]);

    const onSubmit = (formData) => {
        formData.isAdding ? dispatch(addTest(formData)) : dispatch(editTest(formData));
        dispatch(resetTestData());
        setModalActive(true);
        setIsEditing(false);
        setIsAdding(false);
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            isAdding,
            courseId,
            testId,
            name,
            estimatedTime,
            questionCount: questions.length,
            questions
        },
        onSubmit: (values) => {
            onSubmit(values)
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Это поле обязательное';
            }
            if (!values.estimatedTime) {
                errors.estimatedTime = 'Это поле обязательное';
            }
            if (!values.questionCount) {
                errors.questionCount = 'Это поле обязательное';
            } else if (isNaN(values.questionCount)) {
                errors.questionCount = 'Неверное значение';
            }
            return errors;
        },
    });

    const renderQuestionFields = () => {
        const questionFields = [];

        for (let i = 0; i < formik.values.questionCount; i++) {
            const questionName = `questions[${i}].questionContent`;
            const choicesName = `questions[${i}].answers`;
            const answerName = `questions[${i}].correctAnswerNumber`;

            const questionField = (
                <div className={'question'} key={i}>
                    <textarea
                        id={questionName}
                        name={questionName}
                        rows={2}
                        placeholder={`Вопрос ${i + 1}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.questions[i]?.questionContent || ''}
                    />
                    {formik.touched.questions?.[i]?.questionContent && formik.errors.questions?.[i]?.questionContent ? (
                        <div className="errorText">{formik.errors.questions?.[i]?.questionContent}</div>
                    ) : null}
                    <textarea
                        id={choicesName}
                        name={choicesName}
                        rows={6}
                        placeholder={'Варианты ответов'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.questions[i]?.answers || ''}
                    />
                    {formik.touched.questions?.[i]?.answers && formik.errors.questions?.[i]?.answers ? (
                        <div className="errorText">{formik.errors.questions?.[i]?.answers}</div>
                    ) : null}

                    <input
                        id={answerName}
                        name={answerName}
                        type="number"
                        placeholder={'Правильный ответ'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.questions[i]?.correctAnswerNumber || ''}
                    />
                    {formik.touched.questions?.[i]?.correctAnswerNumber && formik.errors.questions?.[i]?.correctAnswerNumber ? (
                        <div className="errorText">{formik.errors.questions?.[i]?.correctAnswerNumber}</div>
                    ) : null}
                </div>
            );

            questionFields.push(questionField);
        }

        return questionFields;
    };
    return {
        formik,
        renderQuestionFields, course
    }
}

export default useTestForm;