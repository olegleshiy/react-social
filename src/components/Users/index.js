// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import avatar from '../../assets/images/user.png';

// API
import { fetchUsers } from '../../bll/users/thunk/fetchUsers';

// Style
import Styles from './style.module.css';

class Users extends Component {

    componentDidMount() {
        this.getUsersAll(2, 3);
        this.props.setTotalUsersCount();
    }

    getUsersAll = async (page, count) => {
        const users = await fetchUsers(page, count);
        this.props.showAllUsers(users.items);
    };

    handleClick = () => {
        this.props.getUsersMore();
    };

    handlePaginationClick = (e) => {
        const currentPage = Number(e.target.dataset.id);
        this.props.setCurrentPage(currentPage);
        this.getUsersAll(currentPage, 3);
    };

    handleFollow = (e) => {
        this.props.followUser(e.target.dataset.id);
    };

    render() {
        const listUser = this.props.users.map(user => {
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={ Styles.content }>
                <div className={ Styles.pagination }>
                    { pages.map(p => {
                        return <span key={ p } data-id={ p }
                                     className={ this.props.currentPage === p && Styles.selectedPage }
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
