import React, {useState} from 'react'
import arrow from "../../../assets/expendArrow.png";

const Lesson = ({lesson}) => {
    const [expanded, setExpanded] = useState(false);

    const onClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={'lesson'}>
            <div className={'lesson__info'}>
                <p className={'lesson__name'}><span>Урок:</span> {lesson.name}</p>
                <button className={`button button_transparent`} onClick={onClick}>
                    <img className={`${expanded ? 'expanded' : ''}`} src={arrow} alt={'arrow'}/>
                </button>
            </div>
            <div className={'lesson__details'} style={{display: expanded ? 'block' : 'none'}}>
                <p className={'lesson__content'}>Содержание: {lesson.content}</p>
            </div>
        </div>
    )
}

export default Lesson;