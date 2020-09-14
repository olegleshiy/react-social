// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

// Instruments
import avatar from '../../assets/images/user.png';

import { fetchUsers } from '../../bll/users/thunk/fetchUsers';

// Style
import Styles from './style.module.css';

class Users extends Component {

    componentDidMount() {
        //this.props.fetchingStartAC();
        //this.props.getAllUsers();
        (async () => {
            const users = await fetchUsers()
        } )

    }

    handleClick = () => {
        this.props.getUsersMoreAC();
    };
    // Показать нужную страницу записать номер текущей страницы
    handlePaginationClick = (e) => {
        const currentPage = Number(e.target.dataset.id);
        this.props.setCurrentPageAC(currentPage);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.showAllUsersAC(res.data.items);
            })
        //this.props.getUsersAll(currentPage, 3);
    };
    // Подписка отписка
    handleFollow = (e) => {
        this.props.followUserAC(e.target.dataset.id);
    };

    render() {
        const {users, totalUsersCount, pageSize, currentPage, setCountPage } = this.props;

        const listUser = users.map(user => {
            return (
                <div className={ Styles.item } key={ user.id }>
                    <img className={ Styles.avatar }
                         src={ user.photos.small || avatar } alt='' />
                    <div className={ Styles.userInfo }>
                        <div>
                            <NavLink to={ `/dialogs/${ user.id }` }
                                     className={ Styles.userName }>{ user.name }</NavLink>
                        </div>
                        <div className={ Styles.locationWrapper }>
                            <div className={ Styles.infoLocationWrapper }>
                                <span className={ `${ Styles.userLocation }` }>{ user.city }, { user.country }</span>
                                <span className={ `${ Styles.userStatus } ${ Styles.online }` }>{ user.status }</span>
                            </div>
                            <button onClick={ this.handleFollow } className={ Styles.followBtn }
                                    data-id={ user.id }>{ user.followed ? 'Unfollow' : 'Follow' }</button>
                        </div>
                    </div>
                </div>
            );
        });

        let pagesCount = Math.ceil(totalUsersCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={ Styles.content }>
                <div className={ Styles.pagination }>
                    { pages.map(p => {
                        return <span
                            key={ p }
                            data-id={ p }

                            className={ `${currentPage === p && Styles.selectedPage}` }

                            onClick={ this.handlePaginationClick }>{ p }</span>;
                    }) }
                </div>

                <div className={ Styles.users }>
                    <div className={ Styles.usersWrapper }>
                        { listUser }
                    </div>
                    <a className={ Styles.button } onClick={ this.handleClick }>SHOW MORE</a>
                </div>
            </div>
        );
    }
}

export default Users;
