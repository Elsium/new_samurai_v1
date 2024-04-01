import React from "react";
import Dialogs from "./Dialogs";
import {sendMsgActionCreator, updateMsgActionCreator} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let updateMsg = (text) => props.store.dispatch(updateMsgActionCreator(text))
    let sendMsg = () => props.store.dispatch(sendMsgActionCreator())

    return (
        <Dialogs state={state} updateMsg={updateMsg} sendMsg={sendMsg}/>
    );
}

export default DialogsContainer;