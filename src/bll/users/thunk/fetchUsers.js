// Core
//import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../REST';
//import { showAllUsersAC } from '../actions';
//import { uiActions } from '../../../ui/actions';

export async function fetchUsers (page, count) {
    try {
        //yield put(uiActions.startFetching());

        const response = await api.users.fetch(page, count);
        const data = await response.json();

        //const response = yield apply(api, api.posts.fetch);
        //const { data: posts, message } = yield apply(response, response.json);
        //console.log("DATA", data);
        if (response.status !== 200) {
             throw new Error('Some error fetchUsers');
        }
        return await data;
        //yield put(postsActions.fillPosts(posts));
    } catch (error) {
        //yield put(uiActions.emitError(error, 'fetchPosts worker'));
    } finally {
        //yield put(uiActions.stopFetching());
    }
}