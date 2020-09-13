//Types
import { types } from './types';
import { fetchUser } from './thunk/fetchUser';
import { actions as ui } from '../ui/actions';

export const actions = {
    setUserProfileAC: (payload) => {
        return {
            type: types.SET_USER_PROFILE,
            payload,
        };
    },
};

export const getUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(ui.fetchingStart());
            const user = await fetchUser(id);
            console.log('USER', user);
            dispatch(actions.setUserProfileAC(user));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(ui.fetchingStop());
        }
    }
};
