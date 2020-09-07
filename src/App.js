import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className={style.app__wrapper}>
      <header className={style.app__header}><Header /></header>
      <nav className={style.app__navbar}>navbar</nav>
      <main className={style.app__main}><Main /></main>
      <footer className={style.app__footer}><Footer /></footer>
    </div>
  );
}

export default App;
