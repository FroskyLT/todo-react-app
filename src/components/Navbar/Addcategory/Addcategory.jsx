import React from 'react';
import style from './Addcategory.module.css';

const AddCategory = (props) => {
    let hideWindow = () => props.hideWindow();
    let changeText = (e) => props.changeText(e.target.value);
    let sendText = () => props.sendText();
    return (
        <div className={style.addCategory__wrapper}>
            <div className={style.addCategory__body}>
                <div className={style.header}>
                    <span onClick={hideWindow}>&#10005;</span>
                </div>
                <div className={style.main}>
                    <div className={style.main__textarea}>
                        <textarea placeholder='Write Your category here'
                            onChange={changeText} value={props.singleCategory}></textarea>
                    </div>
                    <div className={style.main__button}>
                        <button onClick={sendText}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;