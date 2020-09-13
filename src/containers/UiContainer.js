import { connect } from 'react-redux';
import App from '../navigation/App';
//import { actions } from '../bll/ui/actions';

const mapStateToProps = state => ({
    fetching: state.ui.fetching
});

// const mapDispatchToProps = dispatch => ({
//     // fetchingStart: data => {
//     //     return dispatch(actions.updateNewPostAC(data))
//     // },
//     // fetchingStop: data => {
//     //     return dispatch(actions.addPostAC(data))
//     // },
// });

export default connect(
    mapStateToProps,
    null
)(App);
