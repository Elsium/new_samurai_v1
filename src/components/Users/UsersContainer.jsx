import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {sendFollow, sendUnfollow, requestUsers} from '../../redux/usersReducer';
import {getAuth} from "../../redux/authSelectors";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/userSelectors";
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
    }

    render() {
        return <Users {...this.props} onChangePage={this.onChangePage}/>
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
    isAuth: getAuth(state),
})

export default compose(
    connect(mapStateToProps, {sendFollow, sendUnfollow, requestUsers})
)(UsersContainer)