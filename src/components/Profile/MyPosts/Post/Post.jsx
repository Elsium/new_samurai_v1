import React from "react";
import style from "./Post.module.scss"

const Post = (props) => {
    return(
        <div className={style.item}>
            <div className={style.header}>
                <img src="https://yt3.googleusercontent.com/4ATipS780rafUGrk-eQxUhRVyAXcBNIONO1Pyta-0P7I0BPM89Rk1T4W1eB7PAzXS2Ms8m3cy0U=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                <p>{props.name}</p>
            </div>
            <p className={style.content}>
                {props.message}
            </p>
            <div className={style.footer}>
                <div className={style.comments}>
                    {props.commentsCount} comments
                </div>
                <div className={style.likes}>
                    {props.like} likes
                </div>
            </div>
        </div>
    );
}


export default Post;