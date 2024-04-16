import {compose} from "redux";
import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import WithAuth from "../HOC/withAuth";
import {sendMsg} from "../../redux/dialogsReducer";

const mapStateToProps = (state) => ({
    dialogsData: state.dialogsData,
})

export default compose(
    WithAuth,
    connect(mapStateToProps, {sendMsg})
)(Dialogs)