import {authAPI, profileAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'
const SET_MY_PHOTO = 'SET_MY_PHOTO'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userPhoto: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_MY_PHOTO:
            return {
                ...state,
                userPhoto: {...action.photo}
            }
        default:
            return state;
    }
}

const _setUserAuthSuccess = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
const _setMyPhoto = (photo) => ({type: SET_MY_PHOTO, photo})

export const getUserAuth = () => (dispatch) => {
    authAPI.authMe()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id, login, email} = response.data.data;
                profileAPI.getProfile(id)
                    .then(res => {
                        dispatch(_setMyPhoto(res.data.photos.small))
                    })
                dispatch(_setUserAuthSuccess(id, login, email));
            }
        })
}

export default authReducer;