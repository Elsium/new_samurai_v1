import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, followAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
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
    },
    setCurrentPage: (page) => {
        dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (count) => {
        dispatch(setTotalUsersCountAC(count))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);