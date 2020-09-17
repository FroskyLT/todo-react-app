import React from 'react';
import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ModalContainer from './components/Modal/ModalContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import StoreContext from './StoreContex';

const App = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let showModal = () => { if (state.modalBlock.show) return <ModalContainer />; }
        let showNav = () => {
          if (window.screen.width >= 480 || state.navBar.showPhoneNav)
            return <nav className={style.app__navbar}><NavbarContainer /></nav>;
        }
        
        return (<div className={style.app__wrapper}>
          {showModal()}
          <header className={style.app__header}><HeaderContainer /></header>
          {showNav()}
          <main className={style.app__main}><Main /></main>
          <footer className={style.app__footer}><Footer /></footer>
        </div>);
      }
    }
  </StoreContext.Consumer>
}

export default App;
