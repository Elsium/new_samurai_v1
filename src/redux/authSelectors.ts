import {StateType} from "./reduxStore";

export const getAuth = (state: StateType) => {
    return state.auth.isAuth;
}

export const getAuthId = (state: StateType) => {
    return state.auth.id;
}

export const getAuthLogin = (state: StateType) => {
    return state.auth.login;
}

export const getAuthUserPhoto = (state: StateType) => {
    return state.auth.userPhoto;
}

export const getCaptchaURL = (state: StateType) => {
    return state.auth.captchaURL;
}