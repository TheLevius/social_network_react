import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import styles from './Main.module.css';
import Navigation from "./Navigation/Navigation";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from "./Users/UsersContainer";
import LoginPage from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeMain} from "../../redux/mainReducer";
import Preloader from "./common/Preloader/Preloader";
import {withSuspense} from "../../hoc/withSuspense";
import {func} from "prop-types";

const UserCardContainer = React.lazy(() => import('./UserCard/UserCardContainer'));
const PublishPostContainer = React.lazy(() => import('./PublishPost/PublishPostContainer'));
const ChatContainer = React.lazy(() => import('./Chat/ChatContainer'));

class Main extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert('some error occured');
        // console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeMain();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                            <Route path='/' render={()=> <Redirect to={'/profile'}/>} />
                            <Route path='/profile/:userId?' render={withSuspense(UserCardContainer)}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>

                        </div>
                        <div className={styles._NarrowColumn}>
                            <Route path='/dialogs' render={() => <Dialogs store={this.props.store}
                                                                          dialogsData={this.props.state.messagesPage.dialogsData}/>}/>
                        </div>
                        <div className={styles._WideColumn}>
                            <Route path='/dialogs'
                                   render={withSuspense(ChatContainer)}/>
                            <Route path='/profile' render={withSuspense(PublishPostContainer)}/>
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