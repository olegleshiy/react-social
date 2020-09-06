//Types
import { types } from './types';

const initialState = {
    users: [
        {
            id: '1',
            name: 'Oleh Zahrebelnyi',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            status: 'online'
        },
        {
            id: '2',
            name: 'Anna Okhotskaja',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        },
        {
            id: '3',
            name: 'Oskar Zahrebelnyi',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            status: 'online'
        }
    ],
    usersMessage: [
        {
            id: '1',
            avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            message: 'Hi, Oleh! How are you?'
        },
        {
            id: '2',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            message: 'Hi, Anna'
        },
        {
            id: '3',
            avatar: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            message: 'Hello, Anna'
        }
    ],
    newMessageText: ''
};

export const dialogsReducer = (state = initialState, action) => {
    let newMessage = {
        id: `${ state.usersMessage.length + 1 }`,
        avatar: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
        message: action.payload
    };

    switch (action.type) {
        case types.ADD_MESSAGE:
            return {
                ...state,
                userMessage: [...state.usersMessage, newMessage],
                newMessageText: ''
            };
        case types.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.payload
            };
        default:
            return state;
    }
};
