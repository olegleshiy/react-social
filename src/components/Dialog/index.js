// Core
import React from 'react';

// Components
import {
    DialogItem,
    MessageItem
} from '../index';

// Style
import Styles from './style.module.css';

const Dialog = () => {

    const data = [
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
    ];

    const dataMessage = [
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
    ];

    return (
        <div className={ Styles.dialogs }>
            <DialogItem data={ data } />
            <MessageItem dataMessage={ dataMessage } />
        </div>
    );
};

export default Dialog;