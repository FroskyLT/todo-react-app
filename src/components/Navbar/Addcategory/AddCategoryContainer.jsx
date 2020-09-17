import React from 'react';
import AddCategory from './AddCategory';
import { hideAddCategoryWindowActionCreator,
     updateSingleCategoryActionCreator, addCategoryActionCreator } from '../../../redux/navbarReducer';

const AddCategoryContainer = (props) => {
    let hideWindow = () => props.dispatch(hideAddCategoryWindowActionCreator());
    let changeText = (text) => props.dispatch(updateSingleCategoryActionCreator(text));
    let sendText = () => props.dispatch(addCategoryActionCreator());
    return <AddCategory 
        singleCategory={props.singleCategory} hideWindow={hideWindow} changeText={changeText} sendText={sendText}/>
}

export default AddCategoryContainer;