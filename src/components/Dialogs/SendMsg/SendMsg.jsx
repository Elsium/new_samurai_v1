import React from "react";
import style from "./SendMsg.module.scss"
import send from "./img/send.png"

const SendMsg = (props) => {

    let msgElement = React.createRef();

    let sendMsg = () => {
        let text = msgElement.current.value;
        alert(text)
    }

    return (
        <div className={style.container}>
            <div>
                <textarea ref={msgElement} placeholder="Type your message..."></textarea>
                <div onClick={sendMsg}>
                    <img src={send} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default SendMsg;