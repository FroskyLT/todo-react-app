import React from 'react';
import style from './Navbar.module.css';

const Navbar = (props) => {

    let categoriesElement = props.categoriesElement;
    let showAddCategory = () => props.showAddCategory();
    let changeNavSection = () => props.changeNavSection();
    let hideNav = () => props.hideNav();

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
                    <img src={props.settingsIcon} className={style.footer__settings} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default Navbar;