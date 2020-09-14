//Types
import { types } from './types';

export const actions = {
    fetchingStartAC: () => {
        return {
            type: types.FETCHING_START,
        };
    },
    fetchingStopAC: () => {
        return {
            type: types.FETCHING_STOP,
        };
    },
};
