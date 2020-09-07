import React from 'react';
import style from './../Tasks.module.css'

const SingleTask = (props) => {
    return (
        <div className={style.singleTask__wrapper}>
            <input type="checkbox"/>
            {props.text}
        </div>
    );
}

export default SingleTask;