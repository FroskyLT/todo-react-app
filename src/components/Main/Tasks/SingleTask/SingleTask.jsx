import React from 'react';
import style from './../Tasks.module.css'
import { deleteTaskActionCreator } from '../../../../redux/mainReducer';

const SingleTask = (props) => {
    let deleteTask = () => {
        props.dispatch(deleteTaskActionCreator(props.id));
    }
    return (
        <div className={style.singleTask__wrapper}>
            <div className={style.singleTask__container}>
                <div className={style.singleTask__body}>

                    <div className={style.singleTask__text}>
                        <input type="checkbox" />
                        {props.text}
                    </div>
                    <div className={style.singleTask__buttons}>
                        <div className={style.star}></div>
                        <div className={style.x} onClick = {deleteTask}></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SingleTask;