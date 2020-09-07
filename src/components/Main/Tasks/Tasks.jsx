import React from 'react';
import style from './Tasks.module.css'
import SingleTask from './SingleTask/SingleTask';

const Tasks = (props) => {
    let task = [
        {text: 'Wake up' },
        {text: 'Code' },
        {text: 'Eat' },
        {text: 'Sleep' }
    ]
    let singleTaskElement = task.map(m => <SingleTask text={m.text}/>)

    return (
        <div className={style.tasks__wrapper}>
            {singleTaskElement}
        </div>
    );
}

export default Tasks;