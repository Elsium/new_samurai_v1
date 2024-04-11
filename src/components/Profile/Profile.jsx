import React from "react";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <section>
            <Home profile={props.profile}/>
            <Actions/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;