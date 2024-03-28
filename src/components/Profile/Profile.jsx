import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Home from "./Home/Home";
import Actions from "./Actions/Actions";

let postsData = [
    {postID: 1, name: 'Diana Fox', text: 'Hello', date: '23.03.2024', time: '15:32', likesCount: 96, commentsCount: 10},
    {postID: 2, name: 'Diana Fox', text: 'It is my first post here', date: '20.03.2024', time: '19:23', likesCount: 115, commentsCount: 15}
]
const Profile = () => {
    return (
        <section>
            <Home/>
            <Actions/>
            <MyPosts postsData={postsData}/>
        </section>
    );
}

export default Profile;