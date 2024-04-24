import {authAPI, profileAPI, securityAPI} from '../api/api';
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./reduxStore";

const SET_USER_DATA = 'samurai/auth/SET_USER_DATA'
const SET_MY_PHOTO = 'samurai/auth/SET_MY_PHOTO'
const SET_CAPTCHA = 'samurai/auth/SET_CAPTCHA'

type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    userPhoto: string | null,
    captchaURL: string | null,
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userPhoto: null,
    captchaURL: null,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_MY_PHOTO:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetUserAuthSuccessActionPayloadType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean | null
}
type SetUserAuthSuccessActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserAuthSuccessActionPayloadType,
}
export type SetMyPhotoActionType = {
    type: typeof SET_MY_PHOTO,
    payload: { userPhoto: string | null }
}
type GetCaptchaURLSuccessActionType = {
    type: typeof SET_CAPTCHA,
    payload: { captchaURL: string }
}

type ActionTypes = SetUserAuthSuccessActionType |
    SetMyPhotoActionType | GetCaptchaURLSuccessActionType
const _setUserAuthSuccess = (id: number | null, login: string | null, email: string | null, isAuth: boolean | null): SetUserAuthSuccessActionType => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
})
export const _setMyPhoto = (userPhoto: string | null): SetMyPhotoActionType => ({
    type: SET_MY_PHOTO,
    payload: {userPhoto}
})
export const _getCaptchaURLSuccess = (captchaURL: string): GetCaptchaURLSuccessActionType => ({
    type: SET_CAPTCHA,
    payload: {captchaURL}
})

type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>;

export const requestUserAuth = (): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data;
            const response2 = await profileAPI.getProfile(id)
            dispatch(_setMyPhoto(response2.data.photos.small))
            dispatch(_setUserAuthSuccess(id, login, email, true));
        }
    }
export const sendLogin = (email: string, password: string, rememberMe: boolean, captcha: any) =>
    async (dispatch: any) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) dispatch(requestUserAuth());
        else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaURL());
            }
            dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
        }
    }
export const sendLogout = (): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(_setUserAuthSuccess(null, null, null, false));
            dispatch(_setMyPhoto(null));
        }
    }

export const getCaptchaURL = (): ThunkType =>
    async (dispatch) => {
        const response = await securityAPI.getCaptchaURL();
        const captchaURL = response.data.url;
        dispatch(_getCaptchaURLSuccess(captchaURL));
    }

export default authReducer;