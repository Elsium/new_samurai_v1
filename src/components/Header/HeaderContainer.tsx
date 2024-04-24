import React from 'react';
import {connect} from 'react-redux';
import {sendLogout} from '../../redux/authReducer';
import Header from './Header';
import {compose} from "redux";
import {getAuth, getAuthLogin, getAuthUserPhoto} from "../../redux/authSelectors";
import {StateType} from "../../redux/reduxStore";


type MapStatePropsType = {
    isAuth: boolean,
    login: string | null,
    userPhoto: string | null
}

type MapDispatchPropsType = {
    sendLogout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const HeaderContainer = (props: PropsType) => {
    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    isAuth: getAuth(state),
    login: getAuthLogin(state),
    userPhoto: getAuthUserPhoto(state)
})

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, {sendLogout})
)(HeaderContainer)