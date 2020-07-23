import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import styles from './Main.module.css';
import Navigation from "./Navigation/Navigation";
import Dialogs from "./Dialogs/Dialogs";
import ChatContainer from "./Chat/ChatContainer";
import PublishPostContainer from "./PublishPost/PublishPostContainer";
import UsersContainer from "./Users/UsersContainer";
import UserCardContainer from "./UserCard/UserCardContainer";
import LoginPage from "./Login/Login";

import {connect} from "react-redux";
import {compose} from "redux";
import {initializeMain} from "../../redux/mainReducer";
import Preloader from "./common/Preloader/Preloader";

class Main extends React.Component {
    componentDidMount() {
        this.props.initializeMain();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <main className="Main block">
                <div className={styles._wrapper}>
                    <div className={styles._container}>
                        <div className={styles._LeftColumn}>
                            <Navigation/>
                        </div>
                        <div className={styles._UserCardColumn}>
                            <Route path='/profile/:userId?' component={UserCardContainer}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>

                        </div>
                        <div className={styles._NarrowColumn}>
                            <Route path='/dialogs' render={() => <Dialogs store={this.props.store}
                                                                          dialogsData={this.props.state.messagesPage.dialogsData}/>}/>
                        </div>
                        <div className={styles._WideColumn}>
                            <Route path='/dialogs'
                                   render={() => <ChatContainer messagesPage={this.props.state.messagesPage}
                                                                store={this.props.store}
                                                                dispatch={this.props.dispatch}/>}/>
                            <Route path='/profile' render={() => <PublishPostContainer
                                postData={this.props.state.profilePage.postData}
                                newPostText={this.props.state.profilePage.newPostText}
                                dispatch={this.props.dispatch}
                                store={this.props.store}
                            />}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.main.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeMain})) (Main);