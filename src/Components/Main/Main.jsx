import React from 'react';
import {Route, withRouter} from 'react-router-dom';
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

const UserCardContainer = React.lazy(() => import('./UserCard/UserCardContainer'));

const PublishPostContainer = React.lazy(() => import('./PublishPost/PublishPostContainer'));
// import PublishPostContainer from "./PublishPost/PublishPostContainer";
const ChatContainer = React.lazy(() => import('./Chat/ChatContainer'));
//import ChatContainer from "./Chat/ChatContainer";
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