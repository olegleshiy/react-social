// Core

// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function fetchUser (id) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.user.fetch(id);
            const data = await response.json();

            if (response.status !== 200) {
                throw new Error('Some error fetchUsers');
            }

            dispatch(actions.setUserProfileAC(data));

        } catch (error) {
            console.log(error);
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}