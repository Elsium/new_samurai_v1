import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import style from './App.module.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Login from "./components/Login/Login";
import Loader from "./components/UI/Loader/Loader";
import store from "./redux/reduxStore";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialize) return <Loader />
        return (
            <div className={style.appWrapper}>
                <HeaderContainer/>
                <Nav/>
                <main className={style.main}>
                    <Routes>
                        <Route path={`/profile`} element={<ProfileContainer/>}>
                            <Route path={`:userID?`} element={<ProfileContainer/>}/>
                        </Route>
                        <Route path={`/dialog/*`} element={<DialogsContainer/>}/>
                        <Route path={`/news`} element={<News/>}/>
                        <Route path={`/music`} element={<Music/>}/>
                        <Route path={`/users`} element={<UsersContainer/>}/>
                        <Route path={`/login`} element={<Login/>}/>
                    </Routes>
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