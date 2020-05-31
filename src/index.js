import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
