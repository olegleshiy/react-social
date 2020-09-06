// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Style
import Styles from './style.module.css';

const DialogItem = ({ users }) => {
    const listUser = users.map(user => {
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

    return (
        <div className={ Styles.users }>
            { listUser }
        </div>
    )
}

export default DialogItem;
