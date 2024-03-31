const ADD_POST = 'ADDPOST'
const UPDATE_POST = 'UPDATEPOST'
const SEND_MSG = 'SENDMSG'
const UPDATE_MSG = 'UPDATE_MSG'

let store = {
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
    _addPost() {
        if (this._state.profileData.currentPostText === "") return

        const time = new Date();
        let tempDate = ("0" + time.getDate()).slice(-2) + "." + ("0" + (time.getMonth() + 1)).slice(-2) + "." + time.getFullYear();
        let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

        let newPost = {
            postID: this._state.profileData.posts.length + 1,
            name: 'Diana Fox',
            text: this._state.profileData.currentPostText,
            date: tempDate,
            time: tempTime,
            likesCount: 0,
            commentsCount: 0
        }
        this._state.profileData.posts = [newPost, ...this._state.profileData.posts];
        this._state.profileData.currentPostText = "";
        this._callSubscriber(this._state);
    },
    _updatePost(newText) {
        this._state.profileData.currentPostText = newText;
        this._callSubscriber(this._state);
    },
    _sendMsg() {
        if (this._state.dialogsData.currentMsgText === "") return

        const time = new Date();
        let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

        let newMsg = {
            userID: 4,
            msgID: this._state.dialogsData.msg.length + 1,
            text: this._state.dialogsData.currentMsgText,
            time: tempTime,
            from: 0
        };

        this._state.dialogsData.msg = [newMsg, ...this._state.dialogsData.msg];
        this._state.dialogsData.currentMsgText = "";
        this._callSubscriber(this._state);
    },
    _updateMsg(newText) {
        this._state.dialogsData.currentMsgText = newText;
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_POST:
                this._updatePost(action.text)
                break;
            case SEND_MSG:
                this._sendMsg();
                break;
            case UPDATE_MSG:
                this._updateMsg(action.text);
                break;
            default:
                console.error('wrong action');
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostActionCreator = (text) => ({type: UPDATE_POST, text: text})

export const sendMsgActionCreator = () => ({type: SEND_MSG})

export const updateMsgActionCreator = (text) => ({type: UPDATE_MSG, text: text})

export default store;