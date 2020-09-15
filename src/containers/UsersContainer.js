import { connect } from 'react-redux';
import { Users } from '../components';
import { actions } from '../bll/users/actions';
import { fetchUsers } from '../bll/users/thunk/fetchUsers';
import { followUsers } from '../bll/users/thunk/followUsers';
import { getCurrentPage } from '../bll/users/thunk/getCurrentPage';

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    prevPage: state.usersPage.prevPage,
    nextPage: state.usersPage.nextPage,
    countPage: state.usersPage.countPage,
});

const mapDispatchToProps = {
    fetchUsers,
    getCurrentPage,
    followUsers,
    showAllUsers: actions.showAllUsersAC,
    getMoreUsers: actions.getMoreUsersAC,
    setTotalUsersCount: actions.setTotalUsersCountAC,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
