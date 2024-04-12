import React from 'react';
import axios from 'axios';
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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onChangePage = (page) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
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