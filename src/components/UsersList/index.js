// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Style
import Styles from './style.module.css';

const UsersList = (props) => {
    const { users, getUsersMore, followUser } = props;

    const handleClick = () => {
        getUsersMore();
    }

    const handleFollow = () => {
        followUser();
    }

    const listUser = users.map(user => {
        return (
            <div className={ Styles.item } key={ user.id }>
                <img className={ Styles.avatar }
                     src={ user.avatar } alt=''/>
                <div className={ Styles.userInfo }>
                    <div>
                        <NavLink to={`/dialogs/${user.id}`} className={ Styles.userName }>{ user.name }</NavLink>
                    </div>
                    <div className={Styles.locationWrapper}>
                        <div className={Styles.infoLocationWrapper}>
                            <span className={ `${ Styles.userLocation }` }>{ user.city }, { user.city }</span>
                            <span className={ `${ Styles.userStatus } ${ Styles.online }` }>{ user.status }</span>
                        </div>
                        <button onClick={ handleFollow } className={Styles.followBtn}>Follow</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={ Styles.users }>
            <div className={Styles.usersWrapper}>
                { listUser }
            </div>
            <button className={Styles.button} onClick={handleClick}>SHOW MORE</button>
        </div>
    )
}

export default UsersList;
