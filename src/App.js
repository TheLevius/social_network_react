import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Main from "./Components/Main/Main";
import {HashRouter} from "react-router-dom";


const App = (props) => {
    return (
        <HashRouter>
            <div className="App">
                <HeaderContainer />
                <Main state={props.state} store={props.store} dispatch={props.dispatch} updateNewPostText={props.updateNewPostText}/>
            </div>
        </HashRouter>
    );
}

export default App;

