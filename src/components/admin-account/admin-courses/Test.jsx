import React, {useState} from "react";
import arrow from "../../../assets/expendArrow.png";

const Test = ({test}) => {
    const [expanded, setExpanded] = useState(false);

    const onClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={'test'}>
            <div className={'test__info'}>
                <p className={'test__name'}><span>Задание:</span> {test.name}</p>
                <button className={`button button_transparent`} onClick={onClick}>
                    <img className={`${expanded ? 'expanded' : ''}`} src={arrow} alt={'arrow'}/>
                </button>
            </div>
            <div className={'test__details'} style={{display: expanded ? 'block' : 'none'}}>
                {test.questions.map((question, key)=><div className={'test__question'}>
                    <p className={'test__question-content'}>{key+1}. {question.questionContent}</p>
                    <p className={'test__question-answers'}>{question.answers}</p>
                    <p className={'test__question-correct-answer'}>Правильный ответ: {question.correctAnswerNumber}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Test;