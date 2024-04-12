import React, {useEffect} from "react";
import Header from "./Header";
import {setUserAuth} from "../../redux/authReducer";
import {connect} from "react-redux";
import axios from "axios";


const HeaderContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
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