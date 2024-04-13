import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ed0e4876-e86a-4d69-8081-9ef1a6899525'
    }
})

export const UserAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                debugger
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    authMe() {
        return instance.get(`auth/me`);
    },
    getProfile(id) {
        return instance.get(`profile/${id}`);
    }
}