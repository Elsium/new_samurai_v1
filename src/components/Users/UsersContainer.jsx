import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, getUsers} from '../../redux/usersReducer';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onChangePage={this.onChangePage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}
                      isFollowing={this.props.isFollowing}/>
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

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer);