//Types
import { types } from './types';

const initialState = {
    posts: [
        {
            id: '1',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ex.',
            img: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            likeCount: 5
        },
        {
            id: '2',
            message: 'Test ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            likeCount: 2
        }
    ],
    newPostText: 'Front-end developer'
};

export const dashboardReducer = (state = initialState, action) => {
    let newPost = {
        id: `${ state.posts.length + 1 }`,
        message: action.payload,
        img: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
        likeCount: 2
    };

    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                userMessage: [...state.posts, newPost],
                newPostText: ''
            };

        case types.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload
            };

        default:
            return state;
    }
};
