import React from 'react';
import Home from './Home/Home';
import Actions from './Additional/Additional';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, userID, status, sendUpdateStatus}) => {
    return (
        <section>
            <Home profile={profile} userID={userID}/>
            <Actions canStatusChange={userID === profile.userId} status={status} sendUpdateStatus={sendUpdateStatus}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;