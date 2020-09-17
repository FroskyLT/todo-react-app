import React from 'react';
import { hideModalActionCreator } from '../../redux/modalReducer';
import { addTaskActionCreator, updateSingleTaskActionCreator } from '../../redux/mainReducer';
import Modal from './Modal';
import StoreContext from '../../StoreContex';

const ModalContainer = () => {
    return <StoreContext.Consumer>
        { (store) => {
                let state = store.getState();
                let hideModal = () => store.dispatch(hideModalActionCreator());
                let sendTask = () => store.dispatch(addTaskActionCreator());
                let updateTaskText = (text) => store.dispatch(updateSingleTaskActionCreator(text));
                return <Modal singleTask={state.mainPage.singleTask} hideModal={hideModal} sendTask={sendTask} updateTaskText={updateTaskText} />
            }
        }
    </StoreContext.Consumer>
}

export default ModalContainer;