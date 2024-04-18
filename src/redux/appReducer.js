import {requestUserAuth} from "./authReducer";

const INITIALIZE_SUCCESS = 'samurai/app/INITIALIZE_SUCCESS'

let initialState = {
    initialize: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS :
            return {
                ...state,
                initialize: true,
            }
        default:
            return state;
    }
}

const _initializeSuccess = () => ({type: INITIALIZE_SUCCESS})

export const initializeApp = () => async (dispatch) => {
    await Promise.all([dispatch(requestUserAuth())]);
    dispatch(_initializeSuccess());
}
export default appReducer;