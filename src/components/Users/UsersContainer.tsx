import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {requestUsers, sendFollow, sendUnfollow} from '../../redux/usersReducer';
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
import {UserType} from "../../types/types";
import {StateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    users: Array<UserType>
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    isFetching: boolean,
    isFollowing: Array<number>,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    sendUnfollow: (id: number) => void,
    sendFollow: (id: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onChangePage = (page: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(page, pageSize);
    }

    render() {
        return <Users {...this.props} onChangePage={this.onChangePage}/>
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        isAuth: getAuth(state),
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, {sendFollow, sendUnfollow, requestUsers})
)(UsersContainer)