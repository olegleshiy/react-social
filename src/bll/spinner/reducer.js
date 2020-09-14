//Types
import { types } from './types';

const initialState = {
    fetching: false,
};

export const spinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCHING_START:
            return {
                ...state,
                fetching: true,
            };
        case types.FETCHING_STOP:
            return {
                ...state,
                fetching: false,
            };
        default:
            return state;
    }
};
