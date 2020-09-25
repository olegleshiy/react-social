//Types
import { types } from './types';

const initialState = {
    user: {},
    status: '',
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_USER_PROFILE:
            return {
                ...state,
                user: action.payload,
            };
        case types.SET_USER_STATUS:
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};
