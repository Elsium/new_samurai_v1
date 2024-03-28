import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import send from "./img/send.png"

const MyPosts = () => {

    let postsData = [
        {postID: 1, name: 'Diana Fox', text: 'Hello', date: '23.03.2024', time: '15:32', likesCount: 96, commentsCount: 10},
        {postID: 2, name: 'Diana Fox', text: 'It is my first post here', date: '20.03.2024', time: '19:23', likesCount: 115, commentsCount: 15}
    ]

    return (
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea name="" id="" cols="100" rows="1"></textarea>
                <button>
                    <img src={send} alt="send"/>
                </button>
            </div>
            <div className={style.posts}>
                <Post name={postsData[0].name} text={postsData[0].text} likesCount={postsData[0].likesCount} commentsCount={postsData[0].commentsCount} time={postsData[0].time} date={postsData[0].date}/>
                <Post name={postsData[1].name} text={postsData[1].text} likesCount={postsData[1].likesCount} commentsCount={postsData[1].commentsCount} time={postsData[1].time} date={postsData[1].date}/>
            </div>
        </section>
    );
}


export default MyPosts;