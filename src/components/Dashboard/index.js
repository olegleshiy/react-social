// Core
import React from 'react';

// Components
import { PostCreator, Posts, MyProfile } from '../index';

// Style
import Styles from './style.module.css';

const Dashboard = (props) => {
    return (
        <div className={ Styles.content }>
            <MyProfile {...props}/>
            <PostCreator {...props} />
            <Posts
                posts={ props.posts }
            />
        </div>
    );
};

export default Dashboard;
