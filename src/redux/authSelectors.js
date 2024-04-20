export const getAuth = (state) => {
    return state.auth.isAuth;
}

export const getAuthId = (state) => {
    return state.auth.id;
}

export const getAuthLogin = (state) => {
    return state.auth.login;
}

export const getAuthUserPhoto = (state) => {
    return state.auth.userPhoto;
}

export const getcaptchaURL = (state) => {
    return state.auth.captchaURL;
}