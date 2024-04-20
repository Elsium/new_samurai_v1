import React from 'react';
import style from './Message.module.scss';
import classNames from "classnames";

const Message = (props) => {
    return (
        <div className={classNames(style.message, {[style.to]: !props.from, [style.from]: props.from})}>
            {props.text}
            <div className={style.messageTime}>{props.time}</div>
        </div>
    );
}

export default Message;