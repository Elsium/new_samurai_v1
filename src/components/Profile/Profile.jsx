import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";


const Profile = (props) => {
    return (
        <section>
            <Home/>
            <Actions/>
            <MyPosts postsData={props.postsData}/>
        </section>
    );
}

export default Profile;