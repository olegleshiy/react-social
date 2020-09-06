import { connect } from 'react-redux';
import { Dashboard } from '../components';
import { actions } from '../bll/profile/actions';

const mapStateToProps = state => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
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
