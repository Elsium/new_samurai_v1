import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from "./appReducer";

let reducers = combineReducers({
    app: appReducer,
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;