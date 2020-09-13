//Types
import { types } from './types';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        case types.GET_MORE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };
        case types.FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    } else {
                        return { ...user }
                    }
                }),
            };
        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case types.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload,
            };
        default:
            return state;
    }
};
