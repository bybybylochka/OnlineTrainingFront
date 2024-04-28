import React, {useState} from 'react'
import arrow from "../../../assets/expendArrow.png";

const Task = ({task}) => {
    const [expanded, setExpanded] = useState(false);

    const onClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={'task'}>
            <div className={'task__info'}>
                <p className={'task__name'}><span>Задание:</span> {task.name}</p>
                <button className={`button button_transparent`} onClick={onClick}>
                    <img className={`${expanded ? 'expanded' : ''}`} src={arrow} alt={'arrow'}/>
                </button>
            </div>
            <div className={'task__details'} style={{display: expanded ? 'block' : 'none'}}>
                <p className={'task__content'}>Содержание: {task.description}</p>
                <p className={'task__maximumScore'}>Максимальный балл: {task.maximumScore}</p>
            </div>
        </div>
    )
}

export default Task;