import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import send from "./img/send.png"

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

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = postElement.current.value;
        props.updatePost(text);
    }

    return (
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea ref={postElement}
                          placeholder="Write a post..."
                          value={props.profileData.currentPostText}
                          onChange={onPostChange}>
                </textarea>
                <div className={style.button} onClick={addPost}>
                    <img src={send} alt="send"/>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </section>
    );
}

export default MyPosts;