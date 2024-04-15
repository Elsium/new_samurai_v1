import React from 'react';
import Home from './Home/Home';
import Actions from './Additional/Additional';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <section>
            <Home {...props}/>
            <Actions status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;