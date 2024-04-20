import {authAPI, profileAPI, securityAPI} from '../api/api';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai/auth/SET_USER_DATA'
const SET_MY_PHOTO = 'samurai/auth/SET_MY_PHOTO'
const SET_CAPTCHA = 'samurai/auth/SET_CAPTCHA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userPhoto: null,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_MY_PHOTO:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const _setUserAuthSuccess = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})
export const _setMyPhoto = (userPhoto) => ({type: SET_MY_PHOTO, payload: {userPhoto}})
export const _getCaptchaURLSuccess = (captchaURL) => ({type: SET_CAPTCHA, payload: {captchaURL}})

export const requestUserAuth = () => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        const response2 = await profileAPI.getProfile(id)
        dispatch(_setMyPhoto(response2.data.photos.small))
        dispatch(_setUserAuthSuccess(id, login, email, true));
    }
}
export const sendLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) dispatch(requestUserAuth());
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
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

export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    dispatch(_getCaptchaURLSuccess(captchaURL));
}

export default authReducer;