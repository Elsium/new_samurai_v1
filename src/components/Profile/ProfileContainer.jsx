import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import Loader from "../UI/Loader/Loader";


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);