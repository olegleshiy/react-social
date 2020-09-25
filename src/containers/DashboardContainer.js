import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dashboard } from '../components';
//import { actions } from '../bll/dashboard/actions';
import { getStatus } from '../bll/profile/thunk/getStatus';
import { updateStatus } from '../bll/profile/thunk/updateStatus';

const mapStateToProps = state => ({
    newPostText: state.dashboardPage.newPostText,
    posts: state.dashboardPage.posts,
    status: state.profilePage.status,
    userId: state.auth.userId,
});

const mapDispatchToProps = {
    // updateNewPostText: data => {
    //     return dispatch(actions.updateNewPostAC(data))
    // },
    // addPost: data => {
    //     return dispatch(actions.addPostAC(data))
    // },
    getStatus,
    updateStatus,
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Dashboard);
