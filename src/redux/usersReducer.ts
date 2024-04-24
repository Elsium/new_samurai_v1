import {UserAPI} from '../api/api';
import {updateObjectInArray} from "../components/utils/helpers/reducerSoloChange";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./reduxStore";
import {Dispatch} from "react";

const FOLLOW = 'samurai/user/FOLLOW'
const UNFOLLOW = 'samurai/user/UNFOLLOW'
const SET_USERS = 'samurai/user/SET_USERS'
const SET_CURRENT_PAGE = 'samurai/user/CHANGE_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'samurai/user/CHANGE_TOTAL_USERS_COUNT'
const SET_FETCHING = 'samurai/user/SET_FETCHING'
const SET_FOLLOWING_PROGRESS = 'samurai/user/SET_FOLLOWING_PROGRESS'


let initialState = {
    usersList: [] as Array<UserType>,
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 8,
    isFetching: false,
    isFollowing: [] as Array<number>, //array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList, action.id, 'id', {followed: true})
                // usersList: state.usersList.map(u => {
                //     if (u.id === action.id) return {...u, followed: true};
                //     return u;
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList, action.id, 'id', {followed: false})
                // usersList: state.usersList.map(u => {
                //     if (u.id === action.id) return {...u, followed: false};
                //     return u;
                // })
            };
        case SET_USERS:
            return {...state, usersList: action.usersList}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state, isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

type FollowSuccessActionType = {
    type: typeof FOLLOW,
    id: number
}
type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW,
    id: number
}
type SetUsersActionType = {
    type: typeof SET_USERS,
    usersList: Array<UserType>
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
type SetFetchingActionType = {
    type: typeof SET_FETCHING,
    isFetching: boolean
}
type SetFollowingProgressActionType = {
    type: typeof SET_FOLLOWING_PROGRESS,
    isFollowing: boolean,
    id: number
}
type ActionTypes = FollowSuccessActionType | UnFollowSuccessActionType | SetUsersActionType |
    SetCurrentPageActionType | SetTotalUsersCountActionType | SetFetchingActionType | SetFollowingProgressActionType

const _followSuccess = (id: number): FollowSuccessActionType => ({type: FOLLOW, id})
const _unfollowSuccess = (id: number): UnFollowSuccessActionType => ({type: UNFOLLOW, id})
const _setUsers = (usersList: Array<UserType>): SetUsersActionType => ({type: SET_USERS, usersList})
const _setCurrentPage = (page: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, page})
const _setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, count})
const _setFetching = (isFetching: boolean): SetFetchingActionType => ({type: SET_FETCHING, isFetching})
const _setFollowingProgress = (isFollowing: boolean, id: number): SetFollowingProgressActionType => ({
    type: SET_FOLLOWING_PROGRESS,
    isFollowing,
    id
})

type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch, getState) => {
        dispatch(_setFetching(true));
        dispatch(_setCurrentPage(page));
        const response = await UserAPI.getUsers(page, pageSize);
        dispatch(_setFetching(false));
        dispatch(_setUsers(response.items));
        dispatch(_setTotalUsersCount(response.totalCount));
    }

const _sendFollowUnfollowFlow =
    async (dispatch: DispatchType, id: number, APIMethod: any, actionCreator: (id: number) => FollowSuccessActionType | UnFollowSuccessActionType) => {
        dispatch(_setFollowingProgress(true, id));
        const response = await APIMethod(id);
        if (response.data.resultCode === 0) dispatch(actionCreator(id));
        dispatch(_setFollowingProgress(false, id));
    }

export const sendFollow = (id: number): ThunkType =>
    (dispatch: any) => {
        return _sendFollowUnfollowFlow(dispatch, id, UserAPI.follow.bind(UserAPI), _followSuccess);
    }

export const sendUnfollow = (id: number): ThunkType =>
    (dispatch: any) => {
        return _sendFollowUnfollowFlow(dispatch, id, UserAPI.unfollow.bind(UserAPI), _unfollowSuccess);
    }

export default usersReducer;