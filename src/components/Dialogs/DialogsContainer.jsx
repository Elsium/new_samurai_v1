import {connect} from 'react-redux';
import {sendMsgActionCreator, updateMsgActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
    dialogsData: state.dialogsData
})

const mapDispatchToProps = (dispatch) => ({
    updateMsg: (text) => dispatch(updateMsgActionCreator(text)),
    sendMsg: () => dispatch(sendMsgActionCreator())
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;