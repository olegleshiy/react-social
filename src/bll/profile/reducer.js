//Types
import { types } from './types';

const initialState = {
    user: {},
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_USER_PROFILE:
            return {
                ...state,
                user:  action.payload,
            };
        default:
            return state;
    }
};
