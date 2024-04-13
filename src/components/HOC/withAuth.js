import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export const WithAuth = (Component) => {

    const redirect = (props) => {
        if(!props.isAuth) return <Navigate to={`/login`} />

        return <Component {...props}/>
    }

    return connect(mapStateToProps)(redirect);
};

export default WithAuth;