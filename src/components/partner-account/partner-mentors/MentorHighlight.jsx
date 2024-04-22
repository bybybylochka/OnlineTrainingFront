import React from 'react';

const MentorHighlight = ({mentor, onClick}) => {
    return (
        <div className={'mentor-highlight'} onClick={onClick}>
            <img className={'mentor-highlight__image'} src={`data:image/jpeg;base64,${mentor.image}`} alt={'avatar'}/>
            <p className={'mentor-highlight__name'}>{mentor.fullName}</p>
        </div>
    )
}

export default MentorHighlight;