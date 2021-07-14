import React from 'react';
import './App.css';
import styles from './App.module.css';
import {BrowserRouter, HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import store, {AppStateType} from './redux/reduxStore';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import Navigation from './components/Navigation/Navigation';
import {withSuspense} from './hoc/withSuspense';
import {UsersPage} from './components/Users/UsersContainer';
import {LoginPage} from './components/Login/Login';
import Dialogs from './components/Dialogs/Dialogs';
import HeaderContainer from './components/Header/HeaderContainer';

const UserCardContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MyPostsContainer = React.lazy(() => import('./components/MyPosts/MyPostsContainer'));
const ChatContainer = React.lazy(() => import('./components/Chat/ChatContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedChat = withSuspense(ChatContainer)
const SuspendedUserCard = withSuspense(UserCardContainer)

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('some error occured');
        // console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
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
            <div className={'App'}>
                <HeaderContainer/>
                <main className="Main block">
                    <div className={styles._wrapper}>
                        <div className={styles._container}>
                            <div className={styles._LeftColumn}>
                                <Navigation/>
                            </div>
                            <div className={styles._UserCardColumn}>
                                <Route path='/' exact render={()=> <Redirect to={'/profile'}/>} />
                                <Route path='/profile/:userId?' render={()=> <SuspendedUserCard />}/>
                                <Route path='/users' render={() => <UsersPage pageTitle={'Самураи: '}/>}/>
                                <Route path='/login' render={() => <LoginPage/>}/>

                            </div>
                            <div className={styles._NarrowColumn}>
                                <Route path='/dialogs' render={(props) => <Dialogs dialogsData={this.props.state.messagesPage.dialogsData}/>}
                                />
                            </div>
                            <div className={styles._WideColumn}>
                                <Route path='/dialogs'
                                       render={ () => <SuspendedChat /> }/>
                                <Route path='/profile' render={withSuspense(MyPostsContainer)}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        );
    }
}


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    state: state
});

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

export const PetfansSocialApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}

