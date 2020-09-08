import React from 'react';
import style from './Modal.module.css';
import { hideModalActionCreator } from '../../redux/modalReducer';

const Modal = (props) => {
    let hideModal = () => props.dispatch(hideModalActionCreator());

    return (
        <div className={style.headerModal__wrapper}>
            <div className={style.headerModal__body}>
                <div className={style.headerModal__header}>
                    <h1>Add Task</h1>
                    <span onClick={hideModal}>&times;</span>
                </div>
                <div className={style.headerModal__main}>some text</div>
            </div>
        </div>
    )
}

export default Modal;