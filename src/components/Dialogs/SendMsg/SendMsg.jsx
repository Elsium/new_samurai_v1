import React from "react";
import style from "./SendMsg.module.scss"
import send from "./img/send.png"
import {sendMsgActionCreator, updateMsgActionCreator, updatePostActionCreator} from "../../../redux/store";

const SendMsg = (props) => {

    let msgElement = React.createRef();

    let updateMsg = () => {
        debugger
        let text = msgElement.current.value;
        props.dispatch(updateMsgActionCreator(text));
    }
    let sendMsg = () => {
        props.dispatch(sendMsgActionCreator());
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
                <textarea ref={msgElement}
                          value={props.currentMsg}
                          onChange={updateMsg}
                          onKeyDown={sendMsgEnter}
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