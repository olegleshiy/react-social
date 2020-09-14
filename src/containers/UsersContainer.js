import { connect } from 'react-redux';
import { Users } from '../components';
import { actions } from '../bll/users/actions';

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    prevPage: state.usersPage.prevPage,
    nextPage: state.usersPage.nextPage,
    countPage: state.usersPage.countPage,
    fetching: state.spinner.fetching,
});

const mapDispatchToProps = {
    showAllUsersAC: actions.showAllUsersAC,
    getMoreUsersAC: actions.getMoreUsersAC,
    followUserAC: actions.followUserAC,
    setCurrentPageAC: actions.setCurrentPageAC,
    setTotalUsersCountAC: actions.setTotalUsersCountAC,
    setPrevPageAC: actions.setPrevPageAC,
    setNextPageAC: actions.setNextPageAC,
    setCountPageAC: actions.setCountPageAC,
    getAllUsers: actions.getAllUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
