import React from 'react';
import style from './Addcategory.module.css';
import { hideAddCategoryWindowActionCreator, updateSingleCategoryActionCreator, addCategoryActionCreator } from '../../../redux/navbarReducer';

const Addcategory = (props) => {
    let hideWindow = () => props.dispatch(hideAddCategoryWindowActionCreator());
    let changeText = (e) => {
        let text = e.target.value;
        props.dispatch(updateSingleCategoryActionCreator(text));
    }
    let sendText = () => props.dispatch(addCategoryActionCreator());
    return (
        <div className={style.addCategory__wrapper}>
            <div className={style.addCategory__body}>
                <div className={style.header}>
                    <span onClick={hideWindow}>&#10005;</span>
                </div>
                <div className={style.main}>
                    <div className={style.main__textarea}>
                        <textarea placeholder='Write Your category here' onChange={changeText} value={props.singleCategory}></textarea>
                    </div>
                    <div className={style.main__button}>
                        <button onClick={sendText}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addcategory;