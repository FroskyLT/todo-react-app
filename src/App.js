import React from 'react';
import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ModalContainer from './components/Modal/ModalContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
const App = (props) => {
  let showModal = () => { if (props.state.modalBlock.show) return <ModalContainer dispatch={props.dispatch} mainPage={props.state.mainPage} />; }
  let showNav = () => {
    if (window.screen.width >= 480 || props.state.navBar.showPhoneNav )
      return <nav className={style.app__navbar}><NavbarContainer dispatch={props.dispatch} navBar={props.state.navBar}/></nav>;
    } 
  return (
    <div className={style.app__wrapper}>
      {showModal()}
      <header className={style.app__header}><HeaderContainer dispatch={props.dispatch} /></header>
      {showNav()}
      <main className={style.app__main}><Main mainPage={props.state.mainPage} dispatch={props.dispatch}/></main>
      <footer className={style.app__footer}><Footer /></footer>
    </div>
  );
}

export default App;
