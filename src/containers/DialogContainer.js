import { connect } from 'react-redux';
import { Dialog } from '../components';
import { actions } from '../bll/dialog/actions';

const mapStateToProps = state => ({
    newMessageText: state.dialogPage.newMessageText,
    users: state.dialogPage.users,
    usersMessage: state.dialogPage.usersMessage,
});

const mapDispatchToProps = dispatch => ({
    updateNewMessageText: data => {
        return dispatch(actions.updateNewMessageAC(data))
    },
    addMessage: data => {
        return dispatch(actions.addMessageAC(data))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialog);
