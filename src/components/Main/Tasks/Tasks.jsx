import React from 'react';
import style from './Tasks.module.css'
import SingleTask from './SingleTask/SingleTask';
import StoreContext from '../../../StoreContex';
import { deleteTaskActionCreator } from '../../../redux/mainReducer';

const Tasks = (props) => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let deleteTask = (id) => store.dispatch(deleteTaskActionCreator(id));
                let singleTaskElement = state.mainPage.tasks.map(m => <SingleTask id={m.id} text={m.text} dispatch={store.dispatch} deleteTask={deleteTask}/>)
                return (
                    <div className={style.tasks__wrapper}>
                        {singleTaskElement}
                    </div>
                );
            }
        }
    </StoreContext.Consumer>
}

export default Tasks;