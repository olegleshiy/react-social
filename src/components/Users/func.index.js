// Core
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import avatar from '../../assets/images/user.png';

// API
import { fetchUsers } from '../../bll/users/thunk/fetchUsers';

// Style
import Styles from './style.module.css';

const Users = (props) => {
    const { users, getUsersMore, followUser, showAllUsers } = props;

    useEffect(() => {
        (async () => {
                const users = await fetchUsers();
                showAllUsers(users.items);
            }
        )()
    }, []);

    const getUsersAll = async () => {
        if(props.users.length === 0) {
            const users = await fetchUsers();
            showAllUsers(users.items);
        }
    }

    const handleClick = () => {
        getUsersMore();
    }

    const handleFollow = (e) => {
        followUser(e.target.dataset.id);
    }

    const listUser = users.map(user => {
        return (
            <div className={ Styles.item } key={ user.id }>
                <img className={ Styles.avatar }
                     src={ user.photos.small || avatar } alt='' />
                <div className={ Styles.userInfo }>
                    <div>
                        <NavLink to={`/dialogs/${user.id}`} className={ Styles.userName }>{ user.name }</NavLink>
                    </div>
                    <div className={Styles.locationWrapper}>
                        <div className={Styles.infoLocationWrapper}>
                            <span className={ `${ Styles.userLocation }` }>{ user.city }, { user.country }</span>
                            <span className={ `${ Styles.userStatus } ${ Styles.online }` }>{ user.status }</span>
                        </div>
                        <button onClick={ handleFollow } className={ Styles.followBtn } data-id={ user.id }>{user.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={ Styles.content }>
            <div className={ Styles.users }>
                <div className={Styles.usersWrapper}>
                    { listUser }
                </div>
                <button className={Styles.button} onClick={getUsersAll}>Get Users</button>
                <button className={Styles.button} onClick={handleClick}>SHOW MORE</button>
            </div>
        </div>
    );
};

export default Users;
