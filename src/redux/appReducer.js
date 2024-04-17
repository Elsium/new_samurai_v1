import {requestUserAuth} from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

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

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(requestUserAuth())])
        .then( () => {
            dispatch(_initializeSuccess());
        })

}
export default appReducer;