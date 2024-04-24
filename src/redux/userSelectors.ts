import {createSelector} from "reselect";
import {StateType} from "./reduxStore";

export const getUsersSelector = (state: StateType) => {
    return state.users.usersList;
}

export const getUsers = createSelector(getUsersSelector, (usersList) => {
    return usersList.filter(u => true); //difficult selector
})

export const getCurrentPage = (state: StateType) => {
    return state.users.currentPage;
}

export const getTotalUsersCount = (state: StateType) => {
    return state.users.totalUsersCount;
}

export const getPageSize = (state: StateType) => {
    return state.users.pageSize;
}

export const getIsFetching = (state: StateType) => {
    return state.users.isFetching;
}

export const getIsFollowing = (state: StateType) => {
    return state.users.isFollowing;
}