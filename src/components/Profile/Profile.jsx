import React from "react";
import style from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";
const Profile = () => {
    return (
        <main className={style.main}>
            <Home/>
            <Actions/>
            <MyPosts/>
        </main>
    );
}

export default Profile;