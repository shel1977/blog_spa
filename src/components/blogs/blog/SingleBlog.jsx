import React from 'react';
import stl from './SingleBlog.module.css';


const SingleBlog = (props) => {



 /*   let singleBlog = props.postData
         .map(postData => <singleBlog id={postData.id} postImage={postData.postImage} postHeader={postData.postHeader}
                                postText={postData.postText}/>
         );*/

    return (

       <div className={stl.singleBlogStyle}>
           {idBlog}
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
                <button>edit</button>
            </div>
        </div>
    )
        ;
};
export default SingleBlog;