import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserAuth} from '../../redux/authReducer';
import Header from './Header';


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

export default connect(mapStateToProps, {getUserAuth})(HeaderContainer);