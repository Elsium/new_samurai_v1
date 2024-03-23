import React from "react";
import style from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";
const Profile = () => {
    return (
        <section>
            <Home/>
            <Actions/>
            <MyPosts/>
        </section>
    );
}

export default Profile;