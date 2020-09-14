//Types
import { types } from './types';

export const actions = {
    // Sync
    authenticate: (credentials) => {
        return {
            type: types.AUTHENTICATE,
            payload: credentials,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },
};
