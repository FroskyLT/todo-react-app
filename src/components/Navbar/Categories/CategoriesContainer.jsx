import React from 'react';
import Categories from './Categories';
import { deleteCategoryActionCreator } from '../../../redux/navbarReducer';

const CategoriesContainer = (props) => {
    let deleteCategory = () => {
        props.dispatch(deleteCategoryActionCreator(props.id));
    }

    return <Categories deleteCategory={deleteCategory} id={props.id} text={props.text}/>
}

export default CategoriesContainer;