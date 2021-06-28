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
import {AppStateType} from '../../redux/reduxStore';

const UserCardContainer = React.lazy(() => import('./UserCard/UserCardContainer'));
const PublishPostContainer = React.lazy(() => import('./PublishPost/PublishPostContainer'));
const ChatContainer = React.lazy(() => import('./Chat/ChatContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeMain: () => void
}

class Main extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
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
                            <Route path='/users' render={() => <UsersContainer pageTitle={'Самурай'}/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>

                        </div>
                        <div className={styles._NarrowColumn}>
                            <Route path='/dialogs' render={(props) => <Dialogs store={this.props.state}
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

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.main.initialized,
    state: state
});


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeMain})) (Main);