//Types
import { types } from './types';

export const actions = {
    showAllUsersAC: () => {
        return {
            type: types.SHOW_ALL_USERS,
        };
    },
    getMoreUsersAC: () => {
        return {
            type: types.GET_MORE_USERS,
        };
    },
    followUserAC: (payload) => {
        return {
            type: types.FOLLOW_USER,
            payload,
        }
    }

};
