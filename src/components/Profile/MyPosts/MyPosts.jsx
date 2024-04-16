import React from 'react';
import style from './MyPosts.module.scss'
import Post from './Post/Post';
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {

    let posts = props.profileData.posts
        .map(item => <Post key={item.postID}
                           name={item.name}
                           text={item.text}
                           likesCount={item.likesCount}
                           commentsCount={item.commentsCount}
                           time={item.time}
                           date={item.date}/>)

    const onSubmit = (values) => {
        props.createPost(values.currentText)
    }

    return (
        <section className={style.main}>
            <AddPost onSubmit={onSubmit} formValues={props.formValues}/>
            <div className={style.posts}>
                {posts}
            </div>
        </section>
    );
}

export default MyPosts;