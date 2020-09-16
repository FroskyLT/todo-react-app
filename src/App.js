import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  let showModal = () => { if (props.state.modalBlock.show) return <Modal dispatch={props.dispatch} mainPage={props.state.mainPage} />; }
  return (
    <div className={style.app__wrapper}>
      {showModal()}
      <header className={style.app__header}><Header dispatch={props.dispatch} /></header>
      <nav className={style.app__navbar}><Navbar dispatch={props.dispatch} navBar={props.state.navBar}/></nav>
      <main className={style.app__main}><Main mainPage={props.state.mainPage} dispatch={props.dispatch}/></main>
      <footer className={style.app__footer}><Footer /></footer>
    </div>
  );
}

export default App;
