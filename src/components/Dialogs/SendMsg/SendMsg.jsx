import React from "react";
import style from "./SendMsg.module.scss"
import send from "./img/send.png"

const SendMsg = (props) => {
    return (
        <div className={style.container}>
            <div>
                <textarea placeholder="Type your message..."></textarea>
                <div>
                    <img src={send} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default SendMsg;