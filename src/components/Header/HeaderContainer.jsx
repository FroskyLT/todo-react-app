import React from 'react';
import { showModalActionCreator } from '../../redux/modalReducer';
import { showPhoneNavActionCreator } from '../../redux/navbarReducer'
import StoreContext from '../../StoreContex';
import Header from './Header';

const HeaderContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let callModal = () => store.dispatch(showModalActionCreator());
                let openNav = () => store.dispatch(showPhoneNavActionCreator());
                return <Header callModal={callModal} openNav={openNav} />
            }
        }
    </StoreContext.Consumer>
}

export default HeaderContainer;