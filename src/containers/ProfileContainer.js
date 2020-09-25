import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Profile } from '../components';
import { getProfile } from '../bll/profile/thunk/getProfile';

const mapStateToProps = state => ({
    user: state.profilePage.user,
});

const mapDispatchToProps = {
    getProfile,
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Profile);
