import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Main from "./Components/Main/Main";
import {BrowserRouter} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <HeaderContainer />
                <Main state={props.state} store={props.store} dispatch={props.dispatch} updateNewPostText={props.updateNewPostText}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

