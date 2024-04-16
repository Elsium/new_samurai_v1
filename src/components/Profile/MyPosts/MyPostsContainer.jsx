import {connect} from 'react-redux';
import {createPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {getFormValues} from "redux-form";

const mapStateToProps = (state) => ({
        profileData: state.profileData,
        formValues: getFormValues('addPost')(state) || ''
})

const MyPostsContainer = connect(mapStateToProps, {createPost})(MyPosts);

export default MyPostsContainer;