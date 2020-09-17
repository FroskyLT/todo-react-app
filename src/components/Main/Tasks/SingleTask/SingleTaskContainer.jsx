import React from 'react';
import SingleTask from './SingleTask';
import { deleteTaskActionCreator } from '../../../../redux/mainReducer';

const SingleTaskContainer = (props) => {
    let deleteTask = () => props.dispatch(deleteTaskActionCreator(props.id));
    
    return <SingleTask deleteTask={deleteTask} text={props.text}/>
}

export default SingleTaskContainer;