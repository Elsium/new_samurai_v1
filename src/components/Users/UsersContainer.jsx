import Users from "./Users";
import {connect} from "react-redux";
import {subscribeAC, setUsersAC, unsubscribeAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
        users: state.usersPage.users,
    })

const mapDispatchToProps = (dispatch) => ({
        subscribe: (userID) => {
            dispatch(subscribeAC(userID));
        },
        unsubscribe: (userID) => {
            dispatch(unsubscribeAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    })

export default connect(mapStateToProps, mapDispatchToProps)(Users);