import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import send from "./img/send.png"

const MyPosts = () => {

    let postsData = [
        {postID: 1, name: 'Diana Fox', text: 'Hello', date: '23.03.2024', time: '15:32', likesCount: 96, commentsCount: 10},
        {postID: 2, name: 'Diana Fox', text: 'It is my first post here', date: '20.03.2024', time: '19:23', likesCount: 115, commentsCount: 15}
    ]

    let posts = postsData.map( item => <Post name={item.name} text={item.text} likesCount={item.likesCount} commentsCount={item.commentsCount} time={item.time} date={item.date}/>)

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