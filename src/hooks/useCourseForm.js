import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useFormik} from "formik";
import {getCourseData, resetCourseData} from "../reducers/courseReducer";
import {getMentors} from "../reducers/partnerReducer";

const validate = values => {
    const errors = {};
    if (!values.image) {
        errors.image = 'Это поле обязательное';
    }
    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.description) {
        errors.description = 'Это поле обязательное';
    }
    if (!values.price) {
        errors.price = 'Это поле обязательное';
    }
    if (!values.category) {
        errors.category = 'Это поле обязательное';
    }
    if (!values.mentor) {
        errors.mentor = 'Это поле обязательное';
    }
    return errors;
};
const useCourseForm = ({onSubmit, courseId, isAdding, setIsAdding, setIsEditing}) => {
    const image = useSelector(state => state.course.image);
    const name = useSelector(state => state.course.name);
    let description = useSelector(state => state.course.description);
    const price = useSelector(state => state.course.price);
    const mentor = useSelector(state => state.course.mentor);
    const category = useSelector(state => state.course.category);
    const mentors = useSelector(state => state.partner.mentors);
    const status = useSelector(state => state.course.status);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const onBack = () => {
        dispatch(resetCourseData());
        setIsEditing(false);
        setIsAdding(false);
    }
    useEffect(() => {
        if (!isAdding) {
            dispatch(getCourseData(courseId));
        }
        dispatch(getMentors());
    }, [dispatch, courseId, isAdding]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            isAdding,
            courseId,
            image,
            name,
            description,
            price,
            category,
            mentor,
            status,
            mentorId: mentor.id,
        },
        validate,
        onSubmit: values => {
            if (isAdding) {
                values.image = fileInputRef.current.files[0];
            }
            onSubmit(values);
        },
    });

    return {
        formik,
        fileInputRef,
        mentors,
        onBack
    };
};

export default useCourseForm;