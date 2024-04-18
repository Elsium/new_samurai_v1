import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {requestProfile, requestStatus, sendUpdateStatus} from '../../redux/profileReducer';
import {sendFollow, sendUnfollow} from "../../redux/usersReducer";
import Profile from './Profile';
import Loader from '../UI/Loader/Loader';
import withRouter from "../HOC/withRouter";
import {getAuthId} from "../../redux/authSelectors";
import {getProfile, getProfileStatus} from "../../redux/profileSelectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const id = this.props.params.userID ? this.props.params.userID : this.props.userID;
        if (!id) this.props.history('/login')
        else {
            this.props.requestProfile(id);
            this.props.requestStatus(id);
        }
    }

    render() {
        if (!this.props.profile) return <Loader/>
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    userID: getAuthId(state),
    status: getProfileStatus(state),
})

export default compose(
    withRouter,
    connect(mapStateToProps, {requestProfile, requestStatus, sendFollow, sendUnfollow, sendUpdateStatus})
)(ProfileContainer);