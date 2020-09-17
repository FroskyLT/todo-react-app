import React from 'react';
import settingsIcon from '../../icons/settings.svg';
import Navbar from './Navbar';
import { showAddCategoryWindowActionCreator, hidePhoneNavActionCreator } from '../../redux/navbarReducer';
import CategoriesContainer from './Categories/CategoriesContainer';
import AddCategoryContainer from './AddCategory/AddCategoryContainer';

const NavbarContainer = (props) => {

    let categoriesElement = props.navBar.categories.map(m => <CategoriesContainer id={m.id} text={m.text} dispatch={props.dispatch} />)
    let showAddCategory = () => props.dispatch(showAddCategoryWindowActionCreator());
    let changeNavSection = () => {
        if (props.navBar.addCategoryWindow)
            return <AddCategoryContainer dispatch={props.dispatch} singleCategory={props.navBar.singleCategory} />
    }

    let hideNav = () => props.dispatch(hidePhoneNavActionCreator());

    return <Navbar dispatch={props.dispatch} navBar={props.navBar} categoriesElement={categoriesElement} settingsIcon={settingsIcon}
        hideNav={hideNav} showAddCategory={showAddCategory} changeNavSection={changeNavSection} />
}
export default NavbarContainer;