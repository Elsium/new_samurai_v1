import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let lastStoreDoNotNeed = {
    _state: {
        profileData: {
            posts: [
                {
                    postID: 2,
                    name: 'Diana Fox',
                    text: 'Hello',
                    date: '23.03.2024',
                    time: '15:32',
                    likesCount: 96,
                    commentsCount: 10
                },
                {
                    postID: 1,
                    name: 'Diana Fox',
                    text: 'It is my first post here',
                    date: '20.03.2024',
                    time: '19:23',
                    likesCount: 115,
                    commentsCount: 15
                }
            ],
            currentPostText: "",
        },
        dialogsData: {
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
    },
    _callSubscriber() {
        console.log('not connected');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._callSubscriber(this._state);
    },
}

export default lastStoreDoNotNeed;