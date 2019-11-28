import React from 'react';
import stl from './post.module.css';
import {NavLink} from "react-router-dom";


const Post = (props) => {
    let newPostElement = React.createRef();

    let redactPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={stl.postStyle}>
            <NavLink to={'/blog/' + props.id}>
                <div className={stl.postImage}>
                    <img src={props.postImage} alt=""/>
                </div>
                <h3 className={stl.postHeader}>
                    {props.postHeader}
                </h3>

                <div className={stl.textPost}>
                    {props.postText}
                </div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>

                <div>
                    <button onClick={redactPost}>edit</button>
                </div>

            </NavLink>
        </div>
    );
};

export default Post;