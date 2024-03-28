import React from "react";
import {Routes, Route} from 'react-router-dom';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Nav/>
            <main className={style.main}>
                <Routes>
                    <Route path={`/profile`} element={<Profile postsData={props.postsData}/>}/>
                    <Route path={`/dialog/*`} element={<Dialogs dialogsData={props.dialogsData} msgData={props.msgData}/>}/>
                    <Route path={`/news`} element={<News/>}/>
                    <Route path={`/music`} element={<Music/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;