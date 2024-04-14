import React from 'react';
import Home from './Home/Home';
import Actions from './Additional/Additional';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <section>
            <Home {...props}/>
            <Actions/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;