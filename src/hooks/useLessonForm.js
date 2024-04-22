import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useFormik} from "formik";
import {addLesson, editLesson, getLesson, resetLessonData} from "../reducers/lessonReducer";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.estimatedTime) {
        errors.estimatedTime = 'Это поле обязательное';
    }
    if (!values.content) {
        errors.content = 'Это поле обязательное';
    }
    return errors;
};
const useLessonForm = ({lessonId, isAdding, setIsAdding, setIsEditing, setModalActive}) => {
    const name = useSelector(state => state.lesson.name);
    const estimatedTime = useSelector(state => state.lesson.estimatedTime);
    const content = useSelector(state => state.lesson.content);
    const courseId = useSelector(state => state.course.id);
    const course = useSelector(state => state.course);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetLessonData());
        if (!isAdding) {
            dispatch(getLesson(lessonId));
        }
    }, [dispatch]);

    const onSubmit = (formData) => {
        formData.isAdding ? dispatch(addLesson(formData)) : dispatch(editLesson(formData));
        dispatch(resetLessonData());
        setModalActive(true);
        setIsEditing(false);
        setIsAdding(false);
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            isAdding,
            courseId,
            lessonId,
            name,
            estimatedTime,
            content
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        }
    });

    return {
        formik,
        course
    };
};

export default useLessonForm;