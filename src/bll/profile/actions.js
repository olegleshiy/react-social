//Types
import { types } from './types';

export const actions = {
    setUserProfileAC: (payload) => {
        return {
            type: types.SET_USER_PROFILE,
            payload,
        };
    },
};
