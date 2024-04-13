import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {follow, unfollow, getUsers} from '../../redux/usersReducer';
import Users from './Users';
import WithAuth from "../HOC/withAuth";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <Users {...this.props} onChangePage={this.onChangePage}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
})

export default compose(
    WithAuth,
    connect(mapStateToProps, {follow, unfollow, getUsers})
)(UsersContainer)