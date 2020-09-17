import React from 'react';
import { showModalActionCreator } from '../../redux/modalReducer';
import { showPhoneNavActionCreator } from '../../redux/navbarReducer'
import Header from './Header';

const HeaderContainer = (props) => {
    let callModal = () => props.dispatch(showModalActionCreator());
    let openNav = () => props.dispatch(showPhoneNavActionCreator());
    return <Header callModal={callModal} openNav={openNav}/>
}

export default HeaderContainer;