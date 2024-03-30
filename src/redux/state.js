import {renderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    if (state.profileData.currentPostText === "") return

    const time = new Date();
    let tempDate = ("0" + time.getDate()).slice(-2) + "." + ("0" + (time.getMonth() + 1)).slice(-2) + "." + time.getFullYear();
    let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

    let newPost = {
        postID: state.profileData.posts.length + 1,
        name: 'Diana Fox',
        text: state.profileData.currentPostText,
        date: tempDate,
        time: tempTime,
        likesCount: 0,
        commentsCount: 0
    }
    state.profileData.posts = [newPost, ...state.profileData.posts];
    state.profileData.currentPostText = "";
    renderEntireTree(state);
}

export let updatePost = (newText) => {
    state.profileData.currentPostText = newText;
    renderEntireTree(state);
}

export let sendMsg = () => {
    if (state.dialogsData.currentMsgText === "") return

    const time = new Date();
    let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

    let newMsg = {
        userID: 4,
        msgID: state.dialogsData.msg.length + 1,
        text: state.dialogsData.currentMsgText,
        time: tempTime,
        from: 0
    };

    state.dialogsData.msg = [newMsg, ...state.dialogsData.msg];
    state.dialogsData.currentMsgText = "";
    renderEntireTree(state);
}

export let updateMsg = (newText) => {
    state.dialogsData.currentMsgText = newText;
    renderEntireTree(state);
}
export default state;