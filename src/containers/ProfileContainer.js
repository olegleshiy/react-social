import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Profile } from '../components';
import { fetchUser } from '../bll/profile/thunk/fetchUser';

const mapStateToProps = state => ({
    user: state.profilePage.user,
});

const mapDispatchToProps = {
    fetchUser,
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Profile);
