import React from 'react';
import Home from './Home/Home';
import Actions from './Additional/Additional';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <section>
            <Home profile={props.profile} userID={props.userID}/>
            <Actions canStatusChange={props.userID === props.profile.userId} status={props.status} sendUpdateStatus={props.sendUpdateStatus}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;