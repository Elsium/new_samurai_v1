import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
        profileData: state.profileData
})
const mapDispatchToProps = (dispatch) => ({
        postChange: (text) => dispatch(updatePostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;