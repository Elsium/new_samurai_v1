import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
        profileData: state.profileData
})
const mapDispatchToProps = (dispatch) => ({
        postChange: () => dispatch(addPostActionCreator()),
        addPost: (text) => dispatch(updatePostActionCreator(text))
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;