import React from 'react';
import style from './Footer.module.css'
import linkedin from '../../icons/linkedin.svg';
import github from '../../icons/github.svg';
import facebook from '../../icons/facebook.svg';

const Footer = (props) => {
    return (
        <div className={style.footer__wrapper}>
            <div className={style.footer__body}>
                <div className={style.footer__copyright}>Copyright &copy; 2020 All rights reserved.</div>
                <div className={style.footer__contacts}>
                    <a href="https://www.linkedin.com/in/dgrudinski/"><img src={linkedin} alt="" className={style.footer__contacts_img} /></a>
                    <a href="https://github.com/FroskyLT"><img src={github} alt="" className={style.footer__contacts_img} /></a>
                    <a href="https://www.facebook.com/david.grudinskij/"><img src={facebook} alt="" className={style.footer__contacts_img} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;