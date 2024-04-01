import React from "react";
import style from "./SendMsg.module.scss"
import send from "./img/send.png"

const SendMsg = (props) => {
    let msgElement = React.createRef();

    let onUpdateMsg = () => props.updateMsg(msgElement.current.value)
    let onSendMsg = () => props.sendMsg()

    let sendMsgEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            onSendMsg();
        }
    }

    return (
        <div className={style.container}>
            <div>
                <textarea ref={msgElement}
                          value={props.currentMsgText}
                          onChange={onUpdateMsg}
                          onKeyDown={sendMsgEnter}
                          placeholder="Type your message...">
                </textarea>
                <div onClick={onSendMsg}>
                    <img src={send} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default SendMsg;