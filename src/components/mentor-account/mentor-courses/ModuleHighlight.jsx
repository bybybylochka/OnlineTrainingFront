import React from 'react';

const ModuleHighlight = ({module, onClick}) => {
    return (
        <div className={'module-highlight'} onClick={onClick}>
            <p className={'module-highlight__name'}>{module.name}</p>
            <p className={'module-highlight__time'}>{module.estimatedTime}</p>
        </div>
    )
}

export default ModuleHighlight;