import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
