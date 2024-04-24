import {StateType} from "./reduxStore";

export const getProfile = (state: StateType) => {
    return state.profileData.profile;
}

export const getProfileStatus = (state: StateType) => {
    return state.profileData.status;
}