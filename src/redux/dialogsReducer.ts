const SEND_MSG = 'samurai/dialogs/SEND_MSG'

type DialogType = {
    userID: number,
    name: string
}

type MessageType = {
    userID: number,
    msgID: number,
    text: string,
    time: string,
    from: 1 | 0,
}

let initialState = {
    msg: [
        {userID: 2, msgID: 8, text: 'ok', time: '12:34', from: 1},
        {userID: 1, msgID: 7, text: 'i`m so sorry (((', time: '12:33', from: 0},
        {userID: 2, msgID: 6, text: 'because you were ignore me...', time: '12:33', from: 1},
        {userID: 1, msgID: 5, text: 'Why?', time: '12:32', from: 0},
        {userID: 2, msgID: 4, text: 'Bye', time: '12:14', from: 1},
        {userID: 2, msgID: 3, text: 'Ok', time: '12:14', from: 1},
        {userID: 1, msgID: 2, text: 'Hi', time: '12:14', from: 0},
        {userID: 2, msgID: 1, text: 'Hi', time: '12:12', from: 1},
    ] as Array<MessageType>,
    dialogs: [
        {userID: 2, name: 'Ivan Dog'},
        {userID: 3, name: 'Lisa Cat'},
        {userID: 4, name: 'Marina El'}
    ] as Array<DialogType>
}

type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MSG:
            if (action.msg === "") return state

            const time = new Date();
            let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

            let newMsg: MessageType = {
                userID: 4,
                msgID: state.msg.length + 1,
                text: action.msg,
                time: tempTime,
                from: 0
            };

            return {
                ...state,
                msg: [newMsg, ...state.msg]
            };
        default:
            return state;
    }
}

type SendMsgActionType = {
    type: typeof SEND_MSG,
    msg: string,
}

export const sendMsg = (msg: string): SendMsgActionType => ({type: SEND_MSG, msg})

export default dialogsReducer;