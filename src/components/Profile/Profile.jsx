import React from 'react';
import Home from './Home/Home';
import Actions from './Additional/Additional';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, userID, status, sendUpdateStatus, isOwner, savePhoto}) => {
    return (
        <section>
            <Home profile={profile} userID={userID} isOwner={isOwner} savePhoto={savePhoto}
                  canStatusChange={userID === profile.userId} status={status} sendUpdateStatus={sendUpdateStatus}/>
            <Actions profile={profile}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;