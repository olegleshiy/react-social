import { connect } from 'react-redux';
import { Users } from '../components';
import { actions, getUsersAll, getCurrentPage } from '../bll/users/actions';

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = {
    getUsersAll,
    getCurrentPage,
    showAllUsers: actions.showAllUsersAC,
    getMoreUsers: actions.getMoreUsersAC,
    followUser: actions.followUserAC,
    setTotalUsersCount: actions.setTotalUsersCountAC,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
