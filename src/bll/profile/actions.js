//Types
import { types } from './types';

export const actions = {
    addPostAC: (payload) => {
        return {
            type: types.ADD_POST,
            payload,
        };
    },
    updateNewPostAC: (payload) => {
        return {
            type: types.UPDATE_NEW_POST_TEXT,
            payload,
        }
    }
};
