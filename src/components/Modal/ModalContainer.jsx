import React from 'react';
import { hideModalActionCreator } from '../../redux/modalReducer';
import { addTaskActionCreator, updateSingleTaskActionCreator } from '../../redux/mainReducer';
import Modal from './Modal';

const ModalContainer = (props) => {
    let hideModal = () => props.dispatch(hideModalActionCreator());
    let sendTask = () => props.dispatch(addTaskActionCreator());
    let updateTaskText = (text) => props.dispatch(updateSingleTaskActionCreator(text));
    return <Modal mainPage={props.mainPage} hideModal={hideModal} sendTask={sendTask} updateTaskText={updateTaskText}/>
}

export default ModalContainer;