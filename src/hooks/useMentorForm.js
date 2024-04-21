import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useFormik} from "formik";
import {getCourseData, resetCourseData} from "../reducers/courseReducer";
import {getMentors} from "../reducers/partnerReducer";
import {getMentorData, resetMentorData} from "../reducers/mentorReducer";

const validate = values => {
    const errors = {};
    if (!values.image) {
        errors.image = 'Это поле обязательное';
    }
    if (!values.login) {
        errors.login = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    if (!values.fullName) {
        errors.fullName = 'Это поле обязательное';
    }
    if (!values.characteristic) {
        errors.characteristic = 'Это поле обязательное';
    }
    if (!values.experience) {
        errors.experience = 'Это поле обязательное';
    }
    return errors;
};
const useMentorForm = ({onSubmit, mentorId, isAdding, setIsAdding, setIsEditing}) => {
    const image = useSelector((state) => state.mentor.image);
    const login = useSelector((state) => state.mentor.login);
    let password = useSelector((state) => state.mentor.password);
    const fullName = useSelector((state) => state.mentor.fullName);
    const characteristic = useSelector((state) => state.mentor.characteristic);
    const experience = useSelector((state) => state.mentor.experience);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const onBack = () => {
        dispatch(resetMentorData());
        setIsEditing(false);
        setIsAdding(false);
    }
    if (!isAdding) password = 'Пароль недоступен к изменению!'
    useEffect(() => {
        if (!isAdding)
            dispatch(getMentorData(mentorId));
    }, [dispatch, fullName, characteristic, experience])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            isAdding: isAdding,
            mentorId: mentorId,
            image: image,
            login: login,
            password: password,
            fullName: fullName,
            characteristic: characteristic,
            experience: experience
        },
        validate,
        onSubmit: values => {
            if(isAdding) {
                values.image = fileInputRef.current.files[0]
            }
            onSubmit(values);
            values.image = null;
        }
    });

    return {
        formik, fileInputRef, onBack
    };
};

export default useMentorForm;