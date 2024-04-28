import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {purchaseCourse} from "../../reducers/studentReducer";
import {useNavigate, useParams} from "react-router-dom";
import {getCourseData} from "../../reducers/courseReducer";

const AfterPayment = () => {
    const {courseId} = useParams();
    const course = useSelector(state => state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {
        dispatch(getCourseData(courseId));
    }, [dispatch])
    const onClick = () => {
        dispatch(purchaseCourse(course.id));
        navigate('/');
    }
    return (
        <div className={'after-payment'}>
            <div className={'after-payment__wrapper wrapper'}>
                <div className={'after-payment__content'}>
                    <p className={'after-payment__text'}>Оплата курса <span>{course.name}</span> прошла успешно!</p>
                    <button className={'button button_colored'} onClick={() => onClick(course)}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}

export default AfterPayment;