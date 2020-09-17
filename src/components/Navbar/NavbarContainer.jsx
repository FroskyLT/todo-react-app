import React from 'react';
import settingsIcon from '../../icons/settings.svg';
import Navbar from './Navbar';
import { showAddCategoryWindowActionCreator, hidePhoneNavActionCreator } from '../../redux/navbarReducer';
import CategoriesContainer from './Categories/CategoriesContainer';
import AddCategoryContainer from './AddCategory/AddCategoryContainer';
import StoreContext from '../../StoreContex';

const NavbarContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let categoriesElement = state.navBar.categories.map(m => <CategoriesContainer id={m.id} text={m.text} dispatch={store.dispatch} />)
                let showAddCategory = () => store.dispatch(showAddCategoryWindowActionCreator());
                let changeNavSection = () => {
                    if (state.navBar.addCategoryWindow)
                        return <AddCategoryContainer dispatch={store.dispatch} singleCategory={state.navBar.singleCategory} />
                }
                let hideNav = () => store.dispatch(hidePhoneNavActionCreator());
                
                return <Navbar dispatch={store.dispatch} navBar={state.navBar} categoriesElement={categoriesElement} settingsIcon={settingsIcon}
                    hideNav={hideNav} showAddCategory={showAddCategory} changeNavSection={changeNavSection} />
            }
        }
    </StoreContext.Consumer>
}
export default NavbarContainer;