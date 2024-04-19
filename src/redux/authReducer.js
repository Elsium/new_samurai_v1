import {authAPI, profileAPI} from '../api/api';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai/auth/SET_USER_DATA'
const SET_MY_PHOTO = 'samurai/auth/SET_MY_PHOTO'

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
                userPhoto: action.photo
            }
        default:
            return state;
    }
}

const _setUserAuthSuccess = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})
export const _setMyPhoto = (photo) => ({type: SET_MY_PHOTO, photo})

export const requestUserAuth = () => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        const response2 = await profileAPI.getProfile(id)
        dispatch(_setMyPhoto(response2.data.photos.small))
        dispatch(_setUserAuthSuccess(id, login, email, true));
    }
}
export const sendLogin = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) dispatch(requestUserAuth());
    else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
}
export const sendLogout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(_setUserAuthSuccess(null, null, null, false));
        dispatch(_setMyPhoto(null));
    }
}

export default authReducer;