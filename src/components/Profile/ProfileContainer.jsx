import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import Loader from "../UI/Loader/Loader";
import {useParams} from "react-router-dom";

const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        const params = useParams();
        return <Component {...props} params={params}/>
    }

    return ComponentWithRouterProps;
}


class ProfileContainer extends React.Component {
    componentDidMount() {
        const id = this.props.params.userID ? this.props.params.userID : 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        if (!this.props.profile) return <Loader/>
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profileData.profile
})

export default connect
(mapStateToProps, {setUserProfile})
(withRouter(ProfileContainer));