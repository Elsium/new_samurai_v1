import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea name="" id="" cols="100" rows="1"></textarea>
                <button>send</button>
            </div>
            <div className={style.posts}>
                <Post/>
                <Post/>
            </div>
        </section>
    );
}


export default MyPosts;