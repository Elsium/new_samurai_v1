import React, {useRef, useEffect} from 'react';
import style from './AddPost.module.scss'
import create from '../img/create.png'
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    let postElement = useRef(null);

    useEffect(() => {
        if (postElement.current) {
            //TODO refactor
            // postElement.current.style.height = '40px';
            // postElement.current.style.height = `${postElement.current.scrollHeight}px`
        }
    }, [props.formValues.currentText]);

    return (
        <form onSubmit={props.handleSubmit} className={style.newPost}>
            <Field component={'textarea'} name={'currentText'} ref={postElement} placeholder={'Write a post...'}/>
            <button className={style.button}>
                <img src={create} alt='send'/>
            </button>
        </form>
    )
}

const AddPost = reduxForm({form: 'addPost'})(PostForm)

export default AddPost;