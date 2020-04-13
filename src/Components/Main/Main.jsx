import React from 'react';
import {Route} from "react-router-dom";
import styles from './Main.module.css';
import Navigation from "./Navigation/Navigation";
import UserCard from "./UserCard/UserCard";
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import Posts from "./Posts/Posts";


const Main = () => {
    return (
        <main className="Main block">
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <div className={styles._LeftColumn}>
                        <Navigation/>
                    </div>
                    <div className={styles._UserCardColumn}>
                        <Route path='/profile' component={UserCard}/>
                    </div>
                    <div className={styles._NarrowColumn}>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>
                    <div className={styles._WideColumn}>
                        <Route path='/dialogs/:id' component={Chat}/>
                        <Route path='/posts' component={Posts}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;