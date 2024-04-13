import React, {useRef, useEffect} from 'react';
import style from './MyPosts.module.scss'
import create from './img/create.png'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = useRef(null);

    let posts = props.profileData.posts
        .map(item => <Post key={item.postID}
                           name={item.name}
                           text={item.text}
                           likesCount={item.likesCount}
                           commentsCount={item.commentsCount}
                           time={item.time}
                           date={item.date}/>)

    useEffect(() => {
        if (postElement.current) {
            postElement.current.style.height = '40px';
            postElement.current.style.height = `${postElement.current.scrollHeight}px`
        }
    }, [props.profileData.currentPostText]);

    let onCreatePost = () => props.CreatePost()
    let onPostChange = () => props.postChange(postElement.current.value)

    return (
        <section className={style.main}>
            <div className={style.newPost}>
                <textarea ref={postElement}
                          value={props.profileData.currentPostText}
                          onChange={onPostChange}
                          placeholder='Write a post...'>
                </textarea>
                <button className={style.button} onClick={onCreatePost}>
                    <img src={create} alt='send'/>
                </button>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </section>
    );
}

export default MyPosts;