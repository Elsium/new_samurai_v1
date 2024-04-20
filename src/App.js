import React, {lazy, Suspense} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import style from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Loader from "./components/UI/Loader/Loader";
import store from "./redux/reduxStore";
import NotFound from "./components/NotFound/NotFound";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Login = lazy(() => import('./components/Login/Login'))
const News = lazy(() => import('./components/News/News'))
const Music = lazy(() => import('./components/Music/Music'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialize) return <Loader/>
        return (
            <div className={style.appWrapper}>
                <HeaderContainer/>
                <Nav/>
                <main className={style.main}>
                    <Suspense fallback={<Loader/>}>
                        <Routes>
                            <Route path={`/`} element={<Navigate to={`/profile`} />}/>
                            <Route path={`/profile`} element={<ProfileContainer/>}>
                                <Route path={`:userID?`} element={<ProfileContainer/>}/>
                            </Route>
                            <Route path={`/dialog/*`} element={<DialogsContainer/>}/>
                            <Route path={`/news`} element={<News/>}/>
                            <Route path={`/music`} element={<Music/>}/>
                            <Route path={`/users`} element={<UsersContainer/>}/>
                            <Route path={`/login`} element={<Login/>}/>
                            <Route path={`/*`} element={<NotFound/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialize: state.app.initialize,
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
)(App)

const SamuraiApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiApp;