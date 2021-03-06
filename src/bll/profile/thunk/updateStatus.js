// Core

// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function updateStatus (id) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.users.updateStatus(id);
            const data = await response.json();

            if (response.status !== 200) {
                throw new Error('Some error updateStatus');
            }
            console.log("UPD_ST", data);
            //dispatch(actions.setUserStatusAC(data));

        } catch (error) {
            console.log(error);
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}