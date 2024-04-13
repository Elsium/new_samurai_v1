import {compose} from "redux";
import {connect} from 'react-redux';
import {sendMsgActionCreator, updateMsgActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import WithAuth from "../HOC/withAuth";

const mapStateToProps = (state) => ({
    dialogsData: state.dialogsData,
})

const mapDispatchToProps = (dispatch) => ({
    updateMsg: (text) => dispatch(updateMsgActionCreator(text)),
    sendMsg: () => dispatch(sendMsgActionCreator())
})


export default compose(
    WithAuth,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)