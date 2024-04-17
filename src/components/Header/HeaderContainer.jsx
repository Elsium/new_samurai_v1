import React from 'react';
import {connect} from 'react-redux';
import {sendLogout} from '../../redux/authReducer';
import Header from './Header';
import {compose} from "redux";
import {getAuth, getAuthId, getAuthLogin, getAuthUserProfile} from "../../redux/authSelectors";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state) => ({
    isAuth: getAuth(state),
    login: getAuthLogin(state),
    id: getAuthId(state),
    userProfile: getAuthUserProfile(state),
})

export default compose(
    connect(mapStateToProps, {sendLogout})
)(HeaderContainer)