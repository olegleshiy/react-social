//Types
import { types } from './types';

const initialState = {
    isAuthenticated: false,
    userId: null,
    email: null,
    login: null,
    isInitialized:   false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return {
                ...state,
                userId: action.payload.userId,
                login: action.payload.login,
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
