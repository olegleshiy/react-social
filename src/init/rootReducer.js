import { combineReducers } from 'redux';
import { dialogsReducer } from '../bll/dialog/reducer';
import { profileReducer } from '../bll/profile/reducer';
import { usersReducer } from '../bll/users/reducer';
import { sidebarReducer } from '../bll/sidebar/reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

export default rootReducer;