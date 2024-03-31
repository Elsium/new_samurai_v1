const SEND_MSG = 'SENDMSG'
const UPDATE_MSG = 'UPDATE_MSG'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MSG:
            if (state.currentMsgText === "") return

            const time = new Date();
            let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

            let newMsg = {
                userID: 4,
                msgID: state.msg.length + 1,
                text: state.currentMsgText,
                time: tempTime,
                from: 0
            };

            state.msg = [newMsg, ...state.msg];
            state.currentMsgText = "";
            return state;
        case UPDATE_MSG:
            state.currentMsgText = action.text;
            return state;
        default:
            return state;
    }
}


export const sendMsgActionCreator = () => ({type: SEND_MSG})
export const updateMsgActionCreator = (text) => ({type: UPDATE_MSG, text: text})

export default dialogsReducer;