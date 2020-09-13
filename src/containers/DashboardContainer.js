import { connect } from 'react-redux';
import { Dashboard } from '../components';
import { actions } from '../bll/dashboard/actions';

const mapStateToProps = state => ({
    newPostText: state.dashboardPage.newPostText,
    posts: state.dashboardPage.posts,
});

const mapDispatchToProps = dispatch => ({
    updateNewPostText: data => {
        return dispatch(actions.updateNewPostAC(data))
    },
    addPost: data => {
        return dispatch(actions.addPostAC(data))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
