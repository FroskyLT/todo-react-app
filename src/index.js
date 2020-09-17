import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import StoreContext from './StoreContex';

let renderEntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(() => {
  renderEntireTree(store.getState());
});

serviceWorker.unregister();
