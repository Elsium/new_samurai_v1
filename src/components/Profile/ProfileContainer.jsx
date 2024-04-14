import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {getProfile} from '../../redux/profileReducer';
import {follow, unfollow} from "../../redux/usersReducer";
import Profile from './Profile';
import Loader from '../UI/Loader/Loader';
import WithAuth from "../HOC/withAuth";
import withRouter from "../HOC/withRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        const id = this.props.params.userID ? this.props.params.userID : this.props.userId;
        this.props.getProfile(id);
    }

    render() {
        if (!this.props.profile) return <Loader/>
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    userId: state.auth.id
})


export default compose(
    WithAuth,
    withRouter,
    connect(mapStateToProps, {getProfile, follow, unfollow})
)(ProfileContainer);