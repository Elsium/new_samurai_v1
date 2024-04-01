import React from "react";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
        <section>
            <Home/>
            <Actions/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;