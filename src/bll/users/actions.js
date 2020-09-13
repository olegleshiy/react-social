//Types
import { types } from './types';
import { fetchUsers } from './thunk/fetchUsers';
import { actions as ui } from '../ui/actions';

export const actions = {
    showAllUsersAC(payload) {
        return {
            type: types.SHOW_ALL_USERS,
            payload,
        };
    },
    getMoreUsersAC(payload) {
        return {
            type: types.GET_MORE_USERS,
            payload,
        };
    },
    followUserAC(payload) {
        return {
            type: types.FOLLOW_USER,
            payload,
        }
    },
    setCurrentPageAC(payload) {
        return {
            type: types.SET_CURRENT_PAGE,
            payload,
        }
    },
    setTotalUsersCountAC(payload) {
        return {
            type: types.SET_TOTAL_USERS_COUNT,
            payload,
        }
    },
};

export const getUsersAll = (page, count) => {
    return async (dispatch) => {
        try {
            dispatch(ui.fetchingStart());
            const users = await fetchUsers(page, count);
            dispatch(actions.showAllUsersAC(users.items));
            dispatch(actions.setTotalUsersCountAC(users.totalCount));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(ui.fetchingStop());
        }
    }
};

export const getCurrentPage = (page, count) => {
    return async (dispatch) => {
        try {
            dispatch(ui.fetchingStart());
            const users = await fetchUsers(page, count);

            dispatch(actions.setCurrentPageAC(page));
            dispatch(actions.showAllUsersAC(users.items));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(ui.fetchingStop());
        }
    }
};
