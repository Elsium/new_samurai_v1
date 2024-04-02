import {connect} from "react-redux";
import {CreatePostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
        profileData: state.profileData
})
const mapDispatchToProps = (dispatch) => ({
        postChange: (text) => dispatch(updatePostActionCreator(text)),
        CreatePost: () => dispatch(CreatePostActionCreator())
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;