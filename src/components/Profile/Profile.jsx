import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";


const Profile = (props) => {
    return (
        <section>
            <Home/>
            <Actions/>
            <MyPosts profileData={props.profileData} dispatch={props.dispatch}/>
        </section>
    );
}

export default Profile;