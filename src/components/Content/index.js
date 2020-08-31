// Core
import React from 'react';

// Components
import { PostCreator, Posts } from '../index';

// Style
import Styles from './style.module.css';

const Content = () => {
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
            <div className={ Styles.banner }>
                <h1 className={ Styles.title }>Banner</h1>
            </div>
            <div className={ Styles.news }/>
            <div className={ Styles.info }>
                <img src='https://t4.ftcdn.net/jpg/01/70/37/67/240_F_170376778_WdB63Jlfx1eQnzTBnjc9JFzIpfMWLMti.jpg'
                     alt='' className={ Styles.avatar }/>
                <div className={ Styles.userInfo }>
                    <h3 className={ Styles.titleName }>Oleh Zahrebelnyi</h3>
                    <p className={ Styles.infoAddress }>Kyiv, Ukraine</p>
                </div>
            </div>
            <PostCreator/>
            <Posts posts={ posts }/>
        </div>
    );
};

export default Content;
