import React from "react";
import style from "./MyPosts.module.scss"
import send from "./img/send.png"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = React.createRef();

    let posts = props.profileData.posts
        .map(item => <Post key={item.postID}
                           name={item.name}
                           text={item.text}
                           likesCount={item.likesCount}
                           commentsCount={item.commentsCount}
                           time={item.time}
                           date={item.date}/>)

    let onAddPost = () => props.addPost()
    let onPostChange = () => props.postChange(postElement.current.value)

    return (
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea ref={postElement}
                          value={props.profileData.currentPostText}
                          onChange={onPostChange}
                          placeholder="Write a post...">
                </textarea>
                <button className={style.button} onClick={onAddPost}>
                    <img src={send} alt="send"/>
                </button>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </section>
    );
}

export default MyPosts;