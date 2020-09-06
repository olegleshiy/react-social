//Types
import { types } from './types';

export const actions = {
    addMessageAC: (payload) => {
        return {
            type: types.ADD_MESSAGE,
            payload,
        };
    },
    updateNewMessageAC: (payload) => {
        return {
            type: types.UPDATE_NEW_MESSAGE_TEXT,
            payload,
        }
    }
};
