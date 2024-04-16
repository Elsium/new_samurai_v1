import React, {useRef} from 'react';
import style from './SendMsg.module.scss'
import send from './img/send.png'
import {Field, reduxForm} from "redux-form";

const SendMsgForm = (props) => {
    let msgElement = useRef(null);
    let sendMsgEnter = (event) => {
        console.log(event)
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            props.onSubmit({currentText: msgElement.current.value})
        }
    }

    return (
        <form onSubmit={props.handleSubmit} className={style.container}>
            <Field component={'textarea'} name={'currentText'} ref={msgElement} placeholder='Type your message...'
                   onKeyDown={sendMsgEnter}/>
            <button>
                <img src={send} alt=''/>
            </button>
        </form>
    );
}

const SendMsgFormRedux = reduxForm({form: 'sendMsg'})(SendMsgForm)

export default SendMsgFormRedux;