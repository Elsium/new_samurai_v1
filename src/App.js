import React from "react";
import {Routes, Route} from 'react-router-dom';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Nav/>
            <main className={style.main}>
                <Routes>
                    <Route path={`/profile/*`} element={<ProfileContainer/>}/>
                    <Route path={`/dialog/*`} element={<DialogsContainer/>}/>
                    <Route path={`/news`} element={<News/>}/>
                    <Route path={`/music`} element={<Music/>}/>
                    <Route path={`/users`} element={<UsersContainer/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;