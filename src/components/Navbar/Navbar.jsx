import React from 'react';
import style from './Navbar.module.css';
import settingsIcon from '../../icons/settings.svg';
import Categories from './Categories/Categories';

const Navbar = () => {
    return (
        <div className={style.navbar__wrapper}>
            <header className={style.header}>
                <div className={style.header__add}>
                    <div className={style.header__add_body}>
                        <div className={style.header__buttonAdd}><span>+</span></div>
                        <div className={style.header__addText}>Add category</div>
                    </div>
                </div>
            </header>
            <section className={style.section}>
                <Categories />
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