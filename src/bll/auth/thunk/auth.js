// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function auth () {

    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.auth.auth();
            const { data } = await response.json();

            if (response.status !== 200) {
                throw new Error('Some error authUser');
            }

            dispatch(actions.authenticate(data));
        } catch (error) {
            console.log(error);
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
