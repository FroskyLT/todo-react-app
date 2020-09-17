import React from 'react';
import style from './Header.module.css'
import { showModalActionCreator } from './../../redux/modalReducer';
import { showPhoneNavActionCreator } from '../../redux/navbarReducer'

const Header = (props) => {
    let callModal = () => props.dispatch(showModalActionCreator());
    let openNav = () => props.dispatch(showPhoneNavActionCreator());
    return (
        <div className={style.header__wrapper}>
            <div className={style.header__burger}>
                <span onClick={openNav}>&#9776;</span>
            </div>
            <div className={style.header__category_container}>
                <div className={style.header__category_body}>
                    category <span className={style.header__category_more}>&#x25BC;</span>
                </div>
            </div>
            <div className={style.header__buttonAdd} onClick={callModal}>
                <span>+</span>
            </div>
        </div>
    )
}

export default Header;