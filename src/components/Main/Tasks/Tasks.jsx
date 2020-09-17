import React from 'react';
import style from './Tasks.module.css'
import SingleTaskContainer from './SingleTask/SingleTaskContainer';

const Tasks = (props) => {
    let singleTaskElement = props.tasks.map(m => <SingleTaskContainer id={m.id} text={m.text} dispatch={props.dispatch}/>)
    return (
        <div className={style.tasks__wrapper}>
            {singleTaskElement}
        </div>
    );
}

export default Tasks;