import { connect } from 'react-redux';
import { Profile } from '../components';
import { actions, getUser } from '../bll/profile/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.profilePage.user,
});

const mapDispatchToProps = {
    getUser,
};

const withUrlDateProfile = withRouter(Profile);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withUrlDateProfile);
