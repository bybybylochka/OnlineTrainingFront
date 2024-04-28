import React, {useState} from 'react';
import arrow from '../../../assets/expendArrow.png';
import CheckingForm from "./CheckingForm";
import {useDispatch} from "react-redux";
import {checkAnswer} from "../../../reducers/courseReducer";

const StudentWork = ({answer, setModalActive}) => {
    const [expanded, setExpanded] = useState(false);
    const onClick = () => {
        setExpanded(!expanded);
    };
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(checkAnswer(formData));
        setExpanded(false);
        setModalActive(true);
    }
    return (
        <div className={answer.mark ? 'work' : 'work work_unchecked'}>
            <div className={'work__info'}>
                <div className={'work__details'}>
                    <p className={'work__name'}><span>Задание:</span> {answer.courseUnitName}</p>
                    <p className={'work__student'}><span>Студент:</span> {answer.studentFullName}</p>
                    <p className={'work__link'}><span>Ссылка на работу:</span> {answer.link}</p>
                    <p className={'work__status'}><span>Проверена:</span> {answer.mark ? 'да' : 'нет'}</p>
                </div>
                <button className={`button button_transparent`} onClick={onClick}>
                    <img className={`${expanded ? 'expanded' : ''}`} src={arrow} alt={'arrow'}/>
                </button>
            </div>

            <div className={'work__checking'} style={{display: expanded ? 'block' : 'none'}}>
                <CheckingForm id={answer.id} mark={answer.mark} feedback={answer.feedback} onSubmit={onSubmit}/>
            </div>

        </div>
    )
}

export default StudentWork;

