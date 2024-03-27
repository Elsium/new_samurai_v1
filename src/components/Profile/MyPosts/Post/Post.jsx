import React from "react";
import style from "./Post.module.scss"
import comment from "./img/comment.png"
import like from "./img/like.png"

const Post = (props) => {
    return (
        <div className={style.item}>
            <div className={style.header}>
                <img
                    src="https://yt3.googleusercontent.com/4ATipS780rafUGrk-eQxUhRVyAXcBNIONO1Pyta-0P7I0BPM89Rk1T4W1eB7PAzXS2Ms8m3cy0U=s900-c-k-c0x00ffffff-no-rj"
                    alt=""/>
                <p>{props.name}</p>
            </div>
            <p className={style.content}>
                {props.message}
            </p>
            <div className={style.footer}>
                <div className={style.comments}>
                    <p>
                        {props.commentsCount}
                    </p>
                    <img src={comment} alt=""/>
                </div>
                <div className={style.likes}>
                    <p>
                        {props.like}
                    </p>
                    <img src={like} alt=""/>
                </div>
            </div>
        </div>
    );
}


export default Post;