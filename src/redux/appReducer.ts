import {requestUserAuth} from "./authReducer";

const INITIALIZE_SUCCESS = 'samurai/app/INITIALIZE_SUCCESS'

export type InitialStateType = {
    initialize: boolean,
}

const initialState: InitialStateType = {
    initialize: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializeSuccessActionType = {
    type: typeof INITIALIZE_SUCCESS,
}

const _initializeSuccess = (): InitializeSuccessActionType => ({type: INITIALIZE_SUCCESS})

export const initializeApp = () => async (dispatch: any) => {
    await Promise.all([dispatch(requestUserAuth())]);
    dispatch(_initializeSuccess());
}
export default appReducer;