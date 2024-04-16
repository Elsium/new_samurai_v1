import React from 'react';
import {connect} from 'react-redux';
import {setLogout} from '../../redux/authReducer';
import Header from './Header';
import {compose} from "redux";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    userProfile: state.auth.userProfile
})

export default compose(
    connect(mapStateToProps, {setLogout})
)(HeaderContainer)