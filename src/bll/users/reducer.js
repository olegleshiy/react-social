//Types
import { types } from './types';

const initialState = {
    // users: [
    //     {
    //         id: '1',
    //         name: 'Oleh Zahrebelnyi',
    //         city: 'Kyiv',
    //         country: 'Ukraine',
    //         avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
    //         status: 'online',
    //         followed: false,
    //     },
    //     {
    //         id: '2',
    //         name: 'Anna Okhotskaja',
    //         city: 'Kyiv',
    //         country: 'Ukraine',
    //         avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
    //         status: 'online',
    //         followed: true,
    //     },
    //     {
    //         id: '3',
    //         name: 'Oskar Zahrebelnyi',
    //         city: 'Kyiv',
    //         country: 'Ukraine',
    //         avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
    //         status: 'online',
    //         followed: false,
    //     }
    // ],

    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    countPage: 0,
    prevPage: 0,
    nextPage: 0,
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
        case types.SET_COUNT_PAGE:
            return {
                ...state,
                countPage: action.payload,
            };
        case types.SET_PREV_PAGE:
            return {
                ...state,
                prevPage: action.payload,
            };
        case types.SET_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload,
            };
        default:
            return state;
    }
};
