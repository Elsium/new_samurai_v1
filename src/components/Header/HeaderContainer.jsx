import React, {useEffect} from "react";
import Header from "./Header";
import {setUserAuth} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";


const HeaderContainer = (props) => {

    useEffect(() => {
        authAPI.authMe()
            .then(response => {
                if(response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    props.setUserAuth(id, login, email)
                }
            })
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