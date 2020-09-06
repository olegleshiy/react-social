// Core
import React from 'react';

// Components
import { UsersList } from '../index';

// Style
import Styles from './style.module.css';

const Users = (props) => {

    return (
        <div className={ Styles.content }>
            <UsersList
                users={ props.users }
            />
        </div>
    );
};

export default Users;
