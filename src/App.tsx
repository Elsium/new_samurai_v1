import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import style from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Loader from "./components/UI/Loader/Loader";
import store, {StateType} from "./redux/reduxStore";
import NotFound from "./components/NotFound/NotFound";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Login = lazy(() => import('./components/Login/Login'))
const News = lazy(() => import('./components/News/News'))
const Music = lazy(() => import('./components/Music/Music'))

type MapStatePropsType = {
    initialize: boolean,
}

type MapDispatchPropsType = {
    initializeApp: () => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType
class App extends React.Component<PropsType> {
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

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    initialize: state.app.initialize,
})

const AppContainer = compose(
    connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, {initializeApp})
)(App)

const SamuraiApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiApp;