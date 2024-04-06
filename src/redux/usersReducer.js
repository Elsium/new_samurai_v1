const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.userID === action.userID) return {...u, subscribed: true};
                    return u;
                } )
            };
        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.userID === action.userID) return {...u, subscribed: false};
                    return u;
                } )
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const subscribeAC = (userID) => ({type: SUBSCRIBE, userID})
export const unsubscribeAC = (userID) => ({type: UNSUBSCRIBE, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;