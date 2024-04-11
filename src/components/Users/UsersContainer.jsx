import React from "react";
import axios from "axios";
import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, followAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onChangePage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onChangePage={this.onChangePage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      following={this.props.following}/>
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);