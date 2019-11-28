
const UPDATE_POST_IMG = 'UPDATE_POST_IMG';
const UPDATE_POST_HEAD = 'UPDATE_POST_HEAD';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';


export const postDataReducer = (state, action) => {
    switch (action.type) {
        case  ADD_POST:
          let newPost = {
            id: 5,
            postImage: state.newImgText,
            postHeader: state.newHeadText,
            postText: state.newPostText
            };
            state.postData.push(newPost);
            state.newImgText = '';
            state.newHeadText = '';
            state.newPostText = '';
            return state;
        case UPDATE_POST_IMG:
            state.newImgText = action.newIText;
            return state;
        case UPDATE_POST_HEAD:
            state.newHeadText = action.newHText;
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            default:
                return state;}


    };
export const AddPostActionCreator = () => ({type : ADD_POST})

export const updatePostImageActionCreator = (imageLink) =>
    ({type: UPDATE_POST_IMG, newIText: imageLink});

export const updatePostHeadActionCreator = (textHead) => {
    return {type: UPDATE_POST_HEAD, newHText: textHead}
};
export const updatePostTextActionCreator = (textPostText) => {
    return {type: UPDATE_POST_TEXT, newText: textPostText}
};
