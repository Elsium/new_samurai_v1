import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import send from "./img/send.png"

const MyPosts = (props) => {
    let posts = props.postsData.map( item => <Post name={item.name} text={item.text} likesCount={item.likesCount} commentsCount={item.commentsCount} time={item.time} date={item.date}/>)

    return (
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea name="" id="" cols="100" rows="1"></textarea>
                <button>
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