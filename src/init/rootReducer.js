import { combineReducers } from 'redux';
import { dialogsReducer } from '../bll/dialog/reducer';
import { dashboardReducer } from '../bll/dashboard/reducer';
import { usersReducer } from '../bll/users/reducer';
import { profileReducer } from '../bll/profile/reducer';
import { sidebarReducer } from '../bll/sidebar/reducer';
import { uiReducer } from '../bll/ui/reducer';
import { authReducer } from '../bll/auth/reducer';

const rootReducer = combineReducers({
    dashboardPage: dashboardReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    ui: uiReducer,
    auth: authReducer,
});

export default rootReducer;