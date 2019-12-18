import React from 'react';
import stl from './Blogs.module.css';
import Post from '../post/Post.jsx';


const Blogs = (props) => {

    let postElements = props.postData.map ( p => <Post postImage={p.postImage}
                                                       postHeader={p.postHeader}
                                                       postText={p.postText}
                                                       key={p.id} id={p.id} />);

    let addImgElement = React.createRef();
    let addHeadElement = React.createRef();
    let addTextElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChangeImg = () => {
        let newImgText = addImgElement.current.value;
        props.updatePostImage(newImgText);
    };

    let onPostChangeHead = () => {
        let newHeadText = addHeadElement.current.value;
        props.updatePostHead(newHeadText);
    };
    let onPostChangeText = () => {
        let textPostText = addTextElement.current.value;
        props.updatePostText(textPostText);
    };

    return (
        <div className={stl.blogStyle}>
            {postElements}
            <div>
                <div><textarea onChange={onPostChangeImg} ref={addImgElement} value={props.newImgText}/></div>
                <div><textarea onChange={onPostChangeHead} ref={addHeadElement} value={props.newHeadText}/></div>
                <div><textarea onChange={onPostChangeText} ref={addTextElement} value={props.newPostText} /></div>
                <div><button onClick={addPost}>add Post</button></div>
            </div>
        </div>

    );
};

export default Blogs;