import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useFormik} from "formik";
import {addTask, editTask, getTask, resetTaskData} from "../reducers/taskReducer";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.estimatedTime) {
        errors.estimatedTime = 'Это поле обязательное';
    }
    if (!values.description) {
        errors.description = 'Это поле обязательное';
    }
    if (!values.maximumScore) {
        errors.maximumScore = 'Это поле обязательное';
    }
    return errors;
};
const useTaskForm = ({taskId, isAdding, setIsAdding, setIsEditing, setModalActive}) => {
    const name = useSelector(state => state.task.name);
    const estimatedTime = useSelector(state => state.task.estimatedTime);
    const description = useSelector(state => state.task.description);
    const maximumScore = useSelector(state => state.task.maximumScore);
    const courseId = useSelector(state => state.course.id);
    const course = useSelector(state => state.course);

    const dispatch = useDispatch();


    const onSubmit = (formData) => {
        formData.isAdding ? dispatch(addTask(formData)) : dispatch(editTask(formData));
        dispatch(resetTaskData());
        setModalActive(true);
        setIsEditing(false);
        setIsAdding(false);
    };
    useEffect(() => {
        dispatch(resetTaskData());
        if (!isAdding) {
            dispatch(getTask(taskId));
        }
    }, [dispatch]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            isAdding,
            courseId,
            taskId,
            name,
            estimatedTime,
            description,
            maximumScore
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        }
    });

    return {
        formik, course
    };
};

export default useTaskForm;