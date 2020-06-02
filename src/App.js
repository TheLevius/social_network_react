import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main state={props.state} store={props.store} dispatch={props.dispatch} updateNewPostText={props.updateNewPostText}/>
            </div>
        </BrowserRouter>
    );
}

export default App;