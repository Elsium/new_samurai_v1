import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, followAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
        users: state.usersPage.users,
    })

const mapDispatchToProps = (dispatch) => ({
        following: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    })

export default connect(mapStateToProps, mapDispatchToProps)(Users);