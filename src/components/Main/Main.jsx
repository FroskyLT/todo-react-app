import React from 'react';
import style from './Main.module.css'
import Tasks from './Tasks/Tasks';

const Main = () => {
    return (
        <div className={style.main__wrapper}>
            <Tasks />
        </div>
    )
}

export default Main;