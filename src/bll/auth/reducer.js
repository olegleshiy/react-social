//Types
import { types } from './types';

const initialState = {
    isAuthenticated: true,
    userId: null,
    isInitialized:   false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return {
                ...state,
                userId: action.payload,
                isAuthenticated: true,
            };
        case types.INITIALIZE:
            return {
                ...state,
                isInitialized: true,
            };
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
