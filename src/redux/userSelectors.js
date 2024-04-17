export const getUsers = (state) => {
    return state.users.usersList;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}

export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount;
}

export const getPageSize = (state) => {
    return state.users.pageSize;
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getIsFollowing = (state) => {
    return state.users.isFollowing;
}