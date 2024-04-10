const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    debugger
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.id) return {...u, followed: true};
                    return u;
                } )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.id) return {...u, followed: false};
                    return u;
                } )
            };
        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, id: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;