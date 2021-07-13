import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {PetfansSocialApp} from './App';

    ReactDOM.render(<PetfansSocialApp />, document.getElementById('root'))

serviceWorker.unregister();
