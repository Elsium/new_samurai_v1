import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text));
    }

    return (
        <MyPosts postChange={postChange}
                 addPost={addPost}
                 profileData={state.profileData}/>
    );
}

export default MyPostsContainer;