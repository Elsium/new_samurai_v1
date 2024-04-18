import {profileAPI} from '../api/api';

const CREATE_POST = 'CREATE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

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
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            if (action.post === '') return state

            const time = new Date();
            let tempDate = ('0' + time.getDate()).slice(-2) + '.' + ('0' + (time.getMonth() + 1)).slice(-2) + '.' + time.getFullYear();
            let tempTime = ('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2);

            let newPost = {
                postID: state.posts[0].postID + 1,
                name: 'Diana Fox',
                text: action.post,
                date: tempDate,
                time: tempTime,
                likesCount: 0,
                commentsCount: 0
            }

            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.postID !== action.postId)
            }
        default:
            return state;
    }
}

export const createPost = (post) => ({type: CREATE_POST, post})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
const _setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const _setUserStatus = (status) => ({type: SET_STATUS, status})

export const requestProfile = (id) => (dispatch) => {
    profileAPI.getProfile(id)
        .then(response => {
            dispatch(_setUserProfile(response.data));
        })
}
export const requestStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(_setUserStatus(response.data));
        })
}
export const sendUpdateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            !response.resultCode && dispatch(_setUserStatus(status));
        })
}

export default profileReducer;