//Types
import { types } from './types';

export const actions = {
    fetchingStart: () => {
        return {
            type: types.FETCHING_START,
        };
    },
    fetchingStop: () => {
        return {
            type: types.FETCHING_STOP,
        };
    },
};
