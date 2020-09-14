//Types
import { types } from './types';

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
    setPrevPageAC: (payload) => {
        return {
            type: types.SET_PREV_PAGE,
            payload,
        }
    },
    setNextPageAC: (payload) => {
        return {
            type: types.SET_NEXT_PAGE,
            payload,
        }
    },
    setCountPageAC: (payload) => {
        return {
            type: types.SET_COUNT_PAGE,
            payload,
        }
    },
};
