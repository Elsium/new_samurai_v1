import React from 'react';
import style from './Dialogs.module.scss'
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import SendMsgFormRedux from './SendMsg/SendMsg';

const Dialogs = ({dialogsData, sendMsg}) => {

    let dialogs = dialogsData.dialogs
        .map(item => <Dialog key={item.userID}
                             name={item.name}
                             userID={item.userID}/>)

    let msg = dialogsData.msg
        .map(item => <Message key={item.msgID}
                              msgID={item.msgID}
                              userID={item.userID}
                              from={item.from}
                              text={item.text}
                              time={item.time}/>)

    const addNewMsg = (values) => {
        sendMsg(values.currentText)
    }

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
                <SendMsgFormRedux onSubmit={addNewMsg}/>
            </div>
        </section>
    );
}

export default Dialogs;