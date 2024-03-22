import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import send from "./send.png"

const MyPosts = () => {
    return(
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea name="" id="" cols="100" rows="1"></textarea>
                <button>
                    <img src={send} alt="send"/>
                </button>
            </div>
            <div className={style.posts}>
                <Post name="Diana Fox" message="Hello" like="96" commentsCount="10"/>
                <Post name="Diana Fox" message="It is my first post here" like="115" commentsCount="15"/>
            </div>
        </section>
    );
}


export default MyPosts;