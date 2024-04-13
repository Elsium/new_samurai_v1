import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setUserAuth} from '../../redux/authReducer';
import Header from './Header';


const HeaderContainer = (props) => {

    useEffect(() => {
        props.setUserAuth();
    }, [])

    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id
})

export default connect(mapStateToProps, {setUserAuth})(HeaderContainer);