// Core
import React, { useEffect } from 'react';

// Components
import { PostCreator, Posts, Profile } from '../index';

// Style
import Styles from './style.module.css';

const Dashboard = (props) => {

    // const postList = () => {
    //     return props.posts,
    // }

    // useEffect(() => {
    //     console.log('POS', props);
    // }, [])

    return (
        <div className={ Styles.content }>
            <Profile {...props}/>
            <PostCreator {...props} />
            <Posts
                posts={ props.posts }
            />
        </div>
    );
};

export default Dashboard;
