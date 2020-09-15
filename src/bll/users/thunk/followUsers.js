// Core

// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function followUsers (status, id) {

    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.users.follow(status, id);
            const data = await response.json();

            if (response.status !== 200) {
                throw new Error('Some error fetchUsers');
            }

            console.log("DATA", data);
            dispatch(actions.followUserAC)
        } catch (error) {
            console.log(error);
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}