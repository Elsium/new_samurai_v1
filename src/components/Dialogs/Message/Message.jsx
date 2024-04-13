import React from 'react';
import style from './Message.module.scss'

const Message = (props) => {

    let msgType = (props.from === 0) ? (style.message + ' ' + style.to) : (style.message + ' ' + style.from);

    return (
        <div className={msgType}>
            {props.text}
            <div className={style.messageTime}>{props.time}</div>
        </div>
    );
}

export default Message;