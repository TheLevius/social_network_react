import React from 'react';
import './App.css';
import styles from './App.module.css';
import 'antd/dist/antd.css';
import {HashRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import store, {AppStateType} from './redux/reduxStore';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import {UsersPage} from './components/Users/UsersContainer';
import {LoginPage} from './components/Login/Login';
import Dialogs from './components/Dialogs/Dialogs';
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import {Header} from './components/Header/Header';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MyPostsContainer = React.lazy(() => import('./components/MyPosts/MyPostsContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedMessages = withSuspense(MessagesContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage);

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

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
            <>
                <Layout>
                    <Header/>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    // defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                        <Menu.Item key="1"><Link to='/profile'><span>Profile</span></Link></Menu.Item>
                                        <Menu.Item key="2"><Link to='/dialogs'><span>Messages</span></Link></Menu.Item>
                                        <Menu.Item key="5"><Link to='/developers'><span>Developers</span></Link></Menu.Item>
                                        <Menu.Item key="9"><Link to='/chat'><span>Chat</span></Link></Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <main className="Main block">
                                    <div className={styles._wrapper}>
                                        <div className={styles._container}>

                                            <Route path='/profile' render={withSuspense(MyPostsContainer)}/>
                                            <Switch>
                                                <Route path='/' exact render={() => <Redirect to={'/profile'}/>}/>

                                                <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                                                <Route path='/developers' render={() => <UsersPage pageTitle={'Самураи: '}/>}/>
                                                <Route path='/login' render={() => <LoginPage/>}/>
                                                <Route path='/dialogs' render={(props) => (<>
                                                    <div className={styles._NarrowColumn}>
                                                        <Dialogs dialogsData={this.props.state.messagesPage.dialogsData}/>
                                                    </div>
                                                    <div className={styles._WideColumn}>
                                                        <SuspendedMessages/>
                                                    </div>
                                                </>)}/>
                                                <Route path={'/chat'} render={() =>(<SuspendedChatPage/>)} />
                                                <Route path={'*'} render={()=>(
                                                    <div>
                                                        404 Page not Found
                                                        <Button type={'primary'}>PUSH</Button>
                                                    </div>
                                                )} />
                                            </Switch>
                                        </div>
                                    </div>
                                </main>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Petfans social network © 2021</Footer>
                </Layout>

            <div className={'App'}>


            </div>
        </>
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

