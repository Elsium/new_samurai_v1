import {authAPI, profileAPI} from '../api/api';
import {stopSubmit} from "redux-form";

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
                ...action.payload
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

const _setUserAuthSuccess = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})
const _setMyPhoto = (photo) => ({type: SET_MY_PHOTO, photo})

export const getUserAuth = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id, login, email} = response.data.data;
                profileAPI.getProfile(id)
                    .then(res => {
                        dispatch(_setMyPhoto(res.data.photos.small))
                    })
                dispatch(_setUserAuthSuccess(id, login, email, true));
            }
        })
}
export const setLogin = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) dispatch(getUserAuth());
            else {
                dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
            }
        })
}
export const setLogout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(_setUserAuthSuccess(null, null, null, false));
                dispatch(_setMyPhoto(null));
            }
        })
}

export default authReducer;