import React from 'react';
import {AddPostActionCreator, updatePostImageActionCreator,
        updatePostHeadActionCreator, updatePostTextActionCreator} from "../../redux/postData_reducer";
import Blogs from "./Blogs";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postData: state.postPage.postData,
        newImgText: state.postPage.newImgText,
        newHeadText: state.postPage.newHeadText,
        newPostText: state.postPage.newPostText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostImage: (newImgText) => {
            let action = updatePostImageActionCreator (newImgText);
            dispatch(action);
        },
        updatePostHead: (newHeadText) => {
            let action = updatePostHeadActionCreator(newHeadText);
            dispatch(action);
        },
        updatePostText: (textPostText) => {
            let action = updatePostTextActionCreator(textPostText);
            dispatch(action);
        },
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
    }
};

const BlogsContainer = connect(mapStateToProps, mapDispatchToProps)(Blogs);

export default BlogsContainer;