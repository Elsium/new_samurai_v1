import React from "react";
import style from "./Dialogs.module.scss"
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import SendMsg from "./SendMsg/SendMsg";

const Dialogs = (props) => {
    let dialogs = props.dialogsData
        .map ( item => <Dialog name={item.name} userID={item.userID}/> )

    let msg = props.msgData
            .map( item => <Message msgID={item.msgID} userID={item.userID} from={item.from} text={item.text} time={item.time}/> )

    return (
        <section className={style.container}>
            <div>
                <div className={style.find}>
                    find dialog
                </div>
                <div className={style.dialogsItems}>
                    {dialogs}
                </div>
            </div>
            <div>
                <div className={style.dialogUser}>
                    <div>
                        ava + name
                    </div>
                    <div>
                        - - -
                    </div>
                </div>
                <div className={style.messagesItems}>
                    {msg}
                </div>
                <SendMsg/>
            </div>
        </section>
    );
}

export default Dialogs;