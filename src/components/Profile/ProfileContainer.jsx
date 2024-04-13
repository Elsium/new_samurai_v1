import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfile} from '../../redux/profileReducer';
import Profile from './Profile';
import Loader from '../UI/Loader/Loader';
import WithAuth from "../HOC/withAuth";

const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        const params = useParams();
        return <Component {...props} params={params}/>
    }

    return ComponentWithRouterProps;
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        const id = this.props.params.userID ? this.props.params.userID : this.props.authID;
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
})

export default WithAuth(connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer)));