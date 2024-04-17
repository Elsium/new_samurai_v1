export const getAuth = (state) => {
    return state.auth.isAuth;
}

export const getAuthId = (state) => {
    return state.auth.id;
}

export const getAuthLogin = (state) => {
    return state.auth.login;
}

export const getAuthUserProfile = (state) => {
    return state.auth.userProfile;
}