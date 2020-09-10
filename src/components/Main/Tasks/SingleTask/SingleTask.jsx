import React from 'react';
import style from './../Tasks.module.css'

const SingleTask = (props) => {
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
                        <div className={style.x}></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SingleTask;