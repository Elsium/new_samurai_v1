const ADD_POST = 'ADDPOST'
const UPDATE_POST = 'UPDATEPOST'

let initialState = {
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
            text: 'Now i start to learn ReactJS & Redux',
            date: '13.03.2024',
            time: '19:23',
            likesCount: 115,
            commentsCount: 15
        }
    ],
    currentPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.currentPostText === "") return state

            const time = new Date();
            let tempDate = ("0" + time.getDate()).slice(-2) + "." + ("0" + (time.getMonth() + 1)).slice(-2) + "." + time.getFullYear();
            let tempTime = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

            let newPost = {
                postID: state.posts.length + 1,
                name: 'Diana Fox',
                text: state.currentPostText,
                date: tempDate,
                time: tempTime,
                likesCount: 0,
                commentsCount: 0
            }
            state.posts = [newPost, ...state.posts];
            state.currentPostText = "";
            return state;
        case UPDATE_POST:
            state.currentPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, text: text})

export default profileReducer;