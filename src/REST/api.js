// Instruments
import { MAIN_URL, groupId } from './config';
import { API_KEY } from '../constants/env';

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    auth: {
        auth () {
            return fetch(`${MAIN_URL}/auth/me`, {
                method:  'GET', // *GET, POST, PUT, DELETE
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // headers: {
                //     "API-KEY": API_KEY,
                // },
                credentials: 'include', //true
                //credentials: true,
            });
        },
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        login (credentials) {
            return fetch(`${MAIN_URL}/auth/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: this.token }),
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:  'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment,
                }),
            });
        },
        remove (postId) {
            return fetch(`${MAIN_URL}/feed/${postId}`, {
                method:  'DELETE',
                headers: {
                    Authorization: this.token,
                },
            });
        },
        like (postId) {
            return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                method:  'PUT',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    profile: {
        updateProfile (profileInfo) {
            return fetch(`${MAIN_URL}/user`, {
                method:  'PUT',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileInfo),
            });
        },
        updateAvatar (avatarFormData) {
            return fetch(`${MAIN_URL}/image`, {
                method:  'POST',
                headers: {
                    Authorization: this.token,
                },
                body: avatarFormData,
            });
        },
    },
    users: {
        fetch (page, count) {
            return fetch(`${MAIN_URL}/users?page=${page}&count=${count}`, {
                method:  'GET',
                // headers: {
                //     Authorization: this.token,
                // },
            });
        },
        follow (id) {
            return fetch(`${MAIN_URL}/follow/${id}`, {
                method:  'POST',
                headers: {
                    "API-KEY": API_KEY,
                    //Authorization: this.token,
                },
                //body: status,
                credentials: 'include',
                //credentials: true,
            });
        },
        unfollow (id) {
            return fetch(`${MAIN_URL}/follow/${id}`, {
                method:  'DELETE',
                headers: {
                    "API-KEY": API_KEY,
                    //Authorization: this.token,
                },
                //body: status,
                credentials: 'include',
                //credentials: true,
            });
        },
    },
    user: {
        fetch (id) {
            return fetch(`${MAIN_URL}/profile/${id}`, {
                method:  'GET',
                // headers: {
                //     Authorization: this.token,
                // },
            });
        },
    },
};
