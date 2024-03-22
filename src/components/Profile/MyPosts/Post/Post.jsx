import React from "react";
import style from "./Post.module.scss"

const Post = () => {
    return(
        <div className={style.item}>
            <div className={style.header}>
                <img src="https://yt3.googleusercontent.com/4ATipS780rafUGrk-eQxUhRVyAXcBNIONO1Pyta-0P7I0BPM89Rk1T4W1eB7PAzXS2Ms8m3cy0U=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                <p>Diana Fox</p>
            </div>
            <p className={style.content}>
                Hello
            </p>
        </div>
    );
}


export default Post;