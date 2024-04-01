const SEND_MSG = 'SEND_MSG'
const UPDATE_MSG = 'UPDATE_MSG'

let initialState = {
    msg: [
        {userID: 1, msgID: 8, text: 'ok', time: '12:34', from: 1},
        {userID: 4, msgID: 7, text: 'i`m so sorry (((', time: '12:33', from: 0},
        {userID: 1, msgID: 6, text: 'because you were ignore me...', time: '12:33', from: 1},
        {userID: 4, msgID: 5, text: 'Why?', time: '12:32', from: 0},
        {userID: 1, msgID: 4, text: 'Bye', time: '12:14', from: 1},
        {userID: 1, msgID: 3, text: 'Ok', time: '12:14', from: 1},
        {userID: 4, msgID: 2, text: 'Hi', time: '12:14', from: 0},
        {userID: 1, msgID: 1, text: 'Hi', time: '12:12', from: 1},
    ],
    dialogs: [
        {userID: 1, name: 'Ivan Dog'},
        {userID: 2, name: 'Lisa Cat'},
        {userID: 3, name: 'Marina El'}
    ],
    currentMsgText: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MSG:
            if (state.currentMsgText === "") return state

            const time = new Date();
            let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

            let newMsg = {
                userID: 4,
                msgID: state.msg.length + 1,
                text: state.currentMsgText,
                time: tempTime,
                from: 0
            };
            
            let tempSendState = {...state};
            tempSendState.msg = [newMsg, ...state.msg];
            tempSendState.currentMsgText = "";
            return tempSendState;
        case UPDATE_MSG:
            let tempUpdateState = {...state};
            tempUpdateState.currentMsgText = action.text;
            return tempUpdateState;
        default:
            return state;
    }
}


export const sendMsgActionCreator = () => ({type: SEND_MSG})
export const updateMsgActionCreator = (text) => ({type: UPDATE_MSG, text: text})

export default dialogsReducer;