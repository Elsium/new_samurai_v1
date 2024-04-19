import React from 'react';
import {connect} from 'react-redux';
import {sendLogout} from '../../redux/authReducer';
import Header from './Header';
import {compose} from "redux";
import {getAuth, getAuthId, getAuthLogin, getAuthUserPhoto} from "../../redux/authSelectors";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state) => ({
    isAuth: getAuth(state),
    login: getAuthLogin(state),
    id: getAuthId(state),
    userPhoto: getAuthUserPhoto(state),
})

export default compose(
    connect(mapStateToProps, {sendLogout})
)(HeaderContainer)