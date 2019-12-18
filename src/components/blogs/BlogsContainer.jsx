import React from 'react';
import {updatePostImage,
    updatePostHead,
    updatePostText,
    addPost    } from "../../redux/postData_reducer";
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


const BlogsContainer = connect(mapStateToProps, {
    updatePostImage,
    updatePostHead,
    updatePostText,
    addPost
})(Blogs);

export default BlogsContainer;