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
                        <div className={style.singleTask__checkbox}>
                            <label className={style.checkbox_label}>
                                <input type="checkbox" />
                                <span className={style.checkboxCustom}></span>
                            </label>
                        </div>
                        <div className={style.singleTask__task}>
                            {props.text}
                        </div>
                    </div>
                    <div className={style.singleTask__buttons}>
                        <div className={style.singleTask__star}></div>
                        <div className={style.x_border}>
                            <div className={style.singleTask__x} onClick={deleteTask}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SingleTask;