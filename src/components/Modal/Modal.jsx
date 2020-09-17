import React from 'react';
import style from './Modal.module.css';
import { hideModalActionCreator } from '../../redux/modalReducer';
import { addTaskActionCreator, updateSingleTaskActionCreator } from '../../redux/mainReducer';

const Modal = (props) => {
    let hideModal = () => props.hideModal();
    let sendTask = () => props.sendTask();
    let updateTaskText = (e) => props.updateTaskText(e.target.value);
    return (
        <div className={style.headerModal__wrapper}>
            <div className={style.headerModal__body}>
                <div className={style.headerModal__header}>
                    <span onClick={hideModal}>&times;</span>
                </div>
                <div className={style.headerModal__main}>
                    <div className={style.headerModal__main_header}>
                        <h1>Add task</h1>
                    </div>
                    <div className={style.headerModal__main_textarea}>
                        <textarea placeholder='Write Your task here' onChange={updateTaskText} value={props.mainPage.singleTask}></textarea>
                    </div>
                    <div className={style.headerModal__main_button}>
                        <button onClick={sendTask}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;