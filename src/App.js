import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
