import React from 'react';
import style from './Navbar.module.css';
import settingsIcon from '../../icons/settings.svg';
import Categories from './Categories/Categories';
import Addcategory from './Addcategory/Addcategory';
import { showAddCategoryWindowActionCreator,hidePhoneNavActionCreator } from '../../redux/navbarReducer';

const Navbar = (props) => {

    let categoriesElement = props.navBar.categories.map(m => <Categories id={m.id} text={m.text} dispatch={props.dispatch} />)

    let showAddCategory = () => props.dispatch(showAddCategoryWindowActionCreator());
    let changeNavSection = () => {
        if (props.navBar.addCategoryWindow)
            return <Addcategory dispatch={props.dispatch} singleCategory={props.navBar.singleCategory} />
    }

    let hideNav = () => props.dispatch(hidePhoneNavActionCreator());

    return (
        <div className={style.navbar__wrapper}>
            <header className={style.header}>
                <div className={style.header__x} onClick={hideNav}>&#10005;</div>
                <div className={style.header__add}>
                    <div className={style.header__add_body}>
                        <div className={style.header__buttonAdd} onClick={showAddCategory}><span>+</span></div>
                        <div className={style.header__addText}>Add category</div>
                    </div>
                </div>
            </header>
            <section className={style.section}>
                {changeNavSection()}
                {categoriesElement}
            </section>
            <footer className={style.footer}>
                <div className={style.footer__body}>
                    <img src={settingsIcon} className={style.footer__settings} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default Navbar;