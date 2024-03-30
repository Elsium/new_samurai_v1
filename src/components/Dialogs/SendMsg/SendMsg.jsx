import React from "react";
import style from "./SendMsg.module.scss"
import send from "./img/send.png"

const SendMsg = (props) => {

    let msgElement = React.createRef();

    let updateMsg = () => {
        let text = msgElement.current.value;
        props.updateMsg(text);
    }
    let sendMsg = () => {
        props.sendMsg();
    }

    let sendMsgEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMsg();
        }
    }

    return (
        <div className={style.container}>
            <div>
                <textarea onChange={updateMsg}
                          onKeyDown={sendMsgEnter}
                          value={props.currentMsg}
                          ref={msgElement}
                          placeholder="Type your message...">
                </textarea>
                <div onClick={sendMsg}>
                    <img src={send} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default SendMsg;