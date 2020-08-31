// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const Posts = ({posts}) => {

    const postList = posts.map((post, id) => {
        return (
            <div className={Styles.item} key={post.id}>
                <img src={post.img} alt='' className={ Styles.chatImg }/>
                <div className={Styles.chatItemContent}>
                    <p className={ Styles.text }>{post.message}</p>
                    <span className={Styles.countLikes}>Liked: {post.likeCount}</span>
                </div>
            </div>
        );
    })
    return (
        <div className={ Styles.chat }>
            { postList }
        </div>
    );
};

export default Posts;