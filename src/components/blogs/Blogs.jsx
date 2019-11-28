import React from 'react';
import stl from './Blogs.module.css';
import Post from '../post/Post.jsx';
import {AddPostActionCreator, updatePostImageActionCreator,
        updatePostHeadActionCreator, updatePostTextActionCreator} from "../../redux/postData_reducer";

const Blogs = (props) => {
    let postElements = props.postPage.postData.map ( p => <Post postImage={p.postImage}
                                                       postHeader={p.postHeader}
                                                       postText={p.postText}/>);

    let addImgElement = React.createRef();
    let addHeadElement = React.createRef();
    let addTextElement = React.createRef();

    let addPost = () => {
        props.dispatch(AddPostActionCreator());
    };

    let onPostChangeImg = () => {
        let newImgText = addImgElement.current.value;
        let action = updatePostImageActionCreator (newImgText);
        props.dispatch(action);   // update textarea online on BLL
    };

    let onPostChangeHead = () => {
        let newHeadText = addHeadElement.current.value;
        let action = updatePostHeadActionCreator(newHeadText);
        props.dispatch(action);
    };
    let onPostChangeText = () => {
        let textPostText = addTextElement.current.value;
        let action = updatePostTextActionCreator(textPostText);
        props.dispatch(action);
    };

    return (
        <div className={stl.blogStyle}>
            {postElements}
            <div>
                <div><textarea onChange={onPostChangeImg} ref={addImgElement} value={props.postPage.newImgText}/></div>
                <div><textarea onChange={onPostChangeHead} ref={addHeadElement} value={props.postPage.newHeadText}/></div>
                <div><textarea onChange={onPostChangeText} ref={addTextElement} value={props.postPage.newPostText} /></div>
                <div><button onClick={addPost}>add Post</button></div>
            </div>
        </div>

    );
};

export default Blogs;