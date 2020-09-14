import { connect } from 'react-redux';
import { Profile } from '../components';
import { fetchUser } from '../bll/profile/thunk/fetchUser';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.profilePage.user,
});

const mapDispatchToProps = {
    fetchUser,
};

let withUrlDateProfile = withRouter(Profile);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withUrlDateProfile);
