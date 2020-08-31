// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const PostCreator = () => {
    return (
        <form className={Styles.posts}>
            <div className={ 'field-group' }>
                <textarea name='post' id='post' className={ Styles.post } placeholder='Your news...'/>
                <button className={ 'btn' }>Send</button>
            </div>
        </form>
    );
};

export default PostCreator;