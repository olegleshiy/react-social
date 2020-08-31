// Core
import React from 'react';
import { NavLink } from 'react-router-dom';


// Components
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

    const listUser = data.map(user => {
        return (
            <div className={ Styles.item } key={ user.id }>
                <img className={ Styles.avatar }
                     src={ user.avatar } alt=''/>
                <div className={ Styles.userInfo }>
                    <NavLink to={`/dialogs/${user.id}`} className={ Styles.userName }>{ user.name }</NavLink>
                    <span className={ `${ Styles.userStatus } ${ Styles.online }` }>{ user.status }</span>
                </div>
            </div>
        );
    });

    const listMessage = dataMessage.map(msg => {
        return (
            <div className={ Styles.messageItem } key={ msg.id }>
                <img className={ Styles.avatar }
                     src={ msg.avatar }
                     alt=''/>
                <p className={ Styles.message }>{ msg.message }</p>
            </div>
        );
    });
    return (
        <div className={ Styles.dialogs }>
            <div className={ Styles.users }>
                { listUser }
            </div>
            <div className={ Styles.chat }>
                { listMessage }
            </div>
        </div>
    );
};

export default Dialog;