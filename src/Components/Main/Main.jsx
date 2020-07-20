import React from 'react';
import {Route} from 'react-router-dom';
import styles from './Main.module.css';
import Navigation from "./Navigation/Navigation";
import Dialogs from "./Dialogs/Dialogs";
import ChatContainer from "./Chat/ChatContainer";
import PublishPostContainer from "./PublishPost/PublishPostContainer";
import UsersContainer from "./Users/UsersContainer";
import UserCardContainer from "./UserCard/UserCardContainer";
import LoginPage from "./Login/Login";

const Main = (props) => {
    return (
        <main className="Main block">
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <div className={styles._LeftColumn}>
                        <Navigation/>
                    </div>
                    <div className={styles._UserCardColumn}>
                        <Route path='/profile/:userId?' component={UserCardContainer}/>
                        <Route path='/users' render={ () => <UsersContainer/>} />
                        <Route path='/login' render={ () => <LoginPage />} />

                    </div>
                    <div className={styles._NarrowColumn}>
                        <Route path='/dialogs' render={ () => <Dialogs store={props.store} dialogsData={props.state.messagesPage.dialogsData}/> } />
                    </div>
                    <div className={styles._WideColumn}>
                        <Route path='/dialogs' render={ () => <ChatContainer messagesPage={props.state.messagesPage} store={props.store} dispatch={props.dispatch}/> } />
                        <Route path='/profile' render={ () => <PublishPostContainer
                            postData={props.state.profilePage.postData}
                            newPostText={props.state.profilePage.newPostText}
                            dispatch={props.dispatch}
                            store={props.store}
                        />}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;