const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'CHANGE_TOTAL_USERS_COUNT'
const SET_FETCHING = 'SET_FETCHING'

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 8,
    isFetching: false,
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
        default:
            return state;
    }
}
export const followAC = (id) => ({type: FOLLOW, id})
export const unfollowAC = (id) => ({type: UNFOLLOW, id})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const setFetchingAC = (isFetching) => ({type: SET_FETCHING, isFetching})

export default usersReducer;