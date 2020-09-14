// Core

// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function getCurrentPage (page = '', count = '') {

    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.users.fetch(page, count);
            const data = await response.json();

            if (response.status !== 200) {
                throw new Error('Some error fetchUsers');
            }
            dispatch(actions.setCurrentPageAC(page));
            dispatch(actions.showAllUsersAC(data.items));

        } catch (error) {
            console.log(error);
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}