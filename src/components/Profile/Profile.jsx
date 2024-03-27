import React from "react";
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