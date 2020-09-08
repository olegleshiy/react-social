import { connect } from 'react-redux';
import { Users } from '../components';
import { actions } from '../bll/users/actions';

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = dispatch => ({
    showAllUsers: data => {
        return dispatch(actions.showAllUsersAC(data));
    },
    getMoreUsers: data => {
        return dispatch(actions.getMoreUsersAC(data));
    },
    followUser: data => {
        return dispatch(actions.followUserAC(data));
    },
    setCurrentPage: data => {
        return dispatch(actions.setCurrentPageAC(data));
    },
    setTotalUsersCount: data => {
        return dispatch(actions.setTotalUsersCountAC(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
