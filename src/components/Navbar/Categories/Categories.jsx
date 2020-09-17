import React from 'react';
import style from './Categories.module.css';

const Categories = (props) => {
    let deleteCategory = () => props.deleteCategory();
    return (
        <div className={style.categories__wrapper}>
            <div className={style.category}>
                <div className={style.none}>&#10005;</div>
                <div className={style.category__text}>{props.text}</div>
                <div className={style.category__x} onClick={deleteCategory}>&#10005;</div>
            </div>
        </div>
    );
}

export default Categories;