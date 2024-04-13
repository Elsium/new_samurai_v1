import React from 'react';
import {Navigate} from "react-router-dom";
import Home from './Home/Home';
import Actions from './Actions/Actions';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    if (!props.isAuth) return <Navigate to={`/login`} />

    return (
        <section>
            <Home profile={props.profile}/>
            <Actions/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;