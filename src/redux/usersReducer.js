import {UserAPI} from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'CHANGE_TOTAL_USERS_COUNT'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 8,
    isFetching: false,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) return {...u, followed: true};
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) return {...u, followed: false};
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_FOLLOWING_PROGRESS:
            return {...state, isFollowing: action.isFollowing
                ? [...state.isFollowing, action.id]
                : state.isFollowing.filter(id => id !== action.id)}
        default:
            return state;
    }
}
const _followSuccess = (id) => ({type: FOLLOW, id})
const _unfollowSuccess = (id) => ({type: UNFOLLOW, id})
const _setUsers = (users) => ({type: SET_USERS, users})
const _setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
const _setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
const _setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})
const _setFollowingProgress = (isFollowing, id) => ({type: SET_FOLLOWING_PROGRESS, isFollowing, id})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(_setFetching(true));
    dispatch(_setCurrentPage(currentPage));
    UserAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(_setFetching(false));
            dispatch(_setUsers(response.items));
            dispatch(_setTotalUsersCount(response.totalCount));
        })
}

export const follow = (id) => (dispatch) => {
    dispatch(_setFollowingProgress(true, id));
    UserAPI.follow(id)
        .then (response => {
            if (response.data.resultCode === 0) dispatch(_followSuccess(id));
            dispatch(_setFollowingProgress(false, id));
        })
}

export const unfollow = (id) => (dispatch) => {
    dispatch(_setFollowingProgress(true, id));
    UserAPI.unfollow(id)
        .then (response => {
            if (response.data.resultCode === 0) dispatch(_unfollowSuccess(id));
            dispatch(_setFollowingProgress(false, id));
        })
}

export default usersReducer;