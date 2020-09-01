// Core
import React from 'react';

// Components
import { PostCreator, Posts, Profile } from '../index';

// Style
import Styles from './style.module.css';

const Dashboard = () => {
    const posts = [
        {
            id: '1',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ex.',
            img: 'https://www.knigograd.com.ua/images/detailed/81pGFJC28qL._SL1500_.jpg',
            likeCount: 5,
        },
        {
            id: '2',
            message: 'Test ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'https://kinoigrushki.ru/image/cache/catalog/tovary/minoni-2015-gadkij-ya/plyushevij-minon-bob-s-mishkoj-22-sm-interaktivnij-minoni-2015_1-1000x1000.jpg',
            likeCount: 3,
        }
    ];

    return (
        <div className={ Styles.content }>
            <Profile />
            <PostCreator/>
            <Posts posts={ posts }/>
        </div>
    );
};

export default Dashboard;
