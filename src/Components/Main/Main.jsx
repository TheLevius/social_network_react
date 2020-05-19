import React from 'react';
import {Route} from "react-router-dom";
import styles from './Main.module.css';
import Navigation from "./Navigation/Navigation";
import UserCard from "./UserCard/UserCard";
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import PostsList from "./PostsList/PostsList";
import PublishPost from "./PostsList/PublishPost/PublishPost";


const Main = (props) => {
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
                        <Route path='/dialogs' render={ () => <Dialogs store={props.store} dialogsData={props.state.messagesPage.dialogsData}/> } />
                    </div>
                    <div className={styles._WideColumn}>
                        <Route path='/dialogs' render={ () => <Chat messagesPage={props.state.messagesPage} store={props.store} dispatch={props.dispatch}/> } />
                        <Route path='/profile' render={ () => <PublishPost postData={props.state.profilePage.postData} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>}/>
                        <Route path='/profile' render={ () => <PostsList postData={props.state.profilePage.postData}/> } />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;