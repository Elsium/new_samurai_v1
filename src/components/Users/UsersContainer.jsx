import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
} from '../../redux/usersReducer';
import {UserAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            })
    }

    onChangePage = (page) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(page);
        UserAPI.getUsers(page, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.items);
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onChangePage={this.onChangePage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
})

// const mapDispatchToProps = (dispatch) => ({
//     following: (id) => {
//         dispatch(followAC(id));
//     },
//     unfollow: (id) => {
//         dispatch(unfollowAC(id));
//     },
//     setUsers: (users) => {
//         dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (page) => {
//         dispatch(setCurrentPageAC(page))
//     },
//     setTotalUsersCount: (count) => {
//         dispatch(setTotalUsersCountAC(count))
//     },
//     setFetching: (isFetching) => {
//         dispatch(setFetchingAC(isFetching))
//     }
// })

export default connect
(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching})
(UsersContainer);