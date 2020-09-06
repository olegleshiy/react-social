//Types
import { types } from './types';

const initialState = {
    users: [
        {
            id: '1',
            name: 'Oleh Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            status: 'online'
        },
        {
            id: '2',
            name: 'Anna Okhotskaja',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '3',
            name: 'Oskar Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '1',
            name: 'Oleh Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            status: 'online'
        },
        {
            id: '2',
            name: 'Anna Okhotskaja',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '3',
            name: 'Oskar Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '1',
            name: 'Oleh Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            status: 'online'
        },
        {
            id: '2',
            name: 'Anna Okhotskaja',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '3',
            name: 'Oskar Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '1',
            name: 'Oleh Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            status: 'online'
        },
        {
            id: '2',
            name: 'Anna Okhotskaja',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '3',
            name: 'Oskar Zahrebelnyi',
            city: 'Kyiv',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        }
    ],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_ALL_USERS:
            return {
                ...state,
            };
        case types.GET_MORE_USERS:
            return {
                ...state,
            };
        case types.FOLLOW_USER:
            return {
                ...state,
            };
        default:
            return state;
    }
};
