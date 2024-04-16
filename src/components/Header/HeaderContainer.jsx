import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserAuth, setLogout} from '../../redux/authReducer';
import Header from './Header';
import {compose} from "redux";
import withRouter from "../HOC/withRouter";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getUserAuth();
    }, [])

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
    connect(mapStateToProps, {getUserAuth, setLogout})
)(HeaderContainer)