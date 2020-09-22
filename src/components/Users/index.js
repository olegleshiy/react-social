// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import avatar from '../../assets/images/user.png';

// Style
import Styles from './style.module.css';
import { followUsers } from '../../bll/users/thunk/followUsers';

class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers(1, 30);
    }

    handleClick = () => {
        this.props.getUsersMore();
    };

    handleSelectUser(e) {
        //e.preventDefault();

        //this.props.getUser(e.target.dataset.id);
    }

    handlePaginationClick = (e) => {
        const currentPage = Number(e.target.dataset.id);
        this.props.getCurrentPage(currentPage, 30);
    };

    handleFollow = (e) => {
        this.props.followUsers(e.target.dataset.id);
    };

    render() {
        const listUser = this.props.users.map(user => {
            return (
                <div className={ Styles.item } key={ user.id }>
                    <div>
                        <NavLink
                            data-id={ user.id }
                            to={ `/profile/${ user.id }` }
                            onClick={this.handleSelectUser}
                        >
                            <img className={ Styles.avatar }
                                 src={ user.photos.small || avatar } alt='' />
                        </NavLink>
                    </div>
                    <div className={ Styles.userInfo }>
                        <div>
                            <NavLink
                                data-id={ user.id }
                                to={ `/profile/${ user.id }` }
                                className={ Styles.userName }
                                onClick={this.handleSelectUser}
                            >{ user.name }</NavLink>
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
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={ Styles.content }>
                <div className={ Styles.pagination }>
                    <>
                    { pages.map((p, i) => {
                        if (i === 0 || i === 1 || i === 2) {
                            return (
                        <span key={ p } data-id={ p }
                              className={ `${this.props.currentPage === p && Styles.selectedPage}` }
                              onClick={ this.handlePaginationClick }>{ p }</span>

                            )
                        } else if (i === pages.length - 1 || i === pages.length - 2 || i === pages.length - 3) {
                            return (
                        <span key={ p } data-id={ p }
                              className={ `${this.props.currentPage === p && Styles.selectedPage}` }
                              onClick={ this.handlePaginationClick }>{ p }</span>
                            )

                        } else if (i === 3) {
                            return (

                        <span key='dsg36236sd'>...</span>
                            )
                        }

                    }) }
                    </>
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
