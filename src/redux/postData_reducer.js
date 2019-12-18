
const UPDATE_POST_IMG = 'UPDATE_POST_IMG';
const UPDATE_POST_HEAD = 'UPDATE_POST_HEAD';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialstate = {
        postData:  [
            {
                id: 1,
                postImage: 'http://ppplaw.ru/wp-content/uploads/2019/10/deti-odni.jpg',
                postHeader: 'Название пооста1',
                postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque blanditiis consectetur consequatur'
            },
            {
                id: 2,
                postImage: 'http://ppplaw.ru/wp-content/uploads/2019/10/deti-odni.jpg',
                postHeader: 'Название пооста2',
                postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque blanditiis consectetur consequatur'
            },
            {
                id: 3,
                postImage: 'http://ppplaw.ru/wp-content/uploads/2019/10/deti-odni.jpg',
                postHeader: 'Название пооста3',
                postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque blanditiis consectetur consequatur'
            },
            {
                id: 4,
                postImage: 'http://ppplaw.ru/wp-content/uploads/2019/10/deti-odni.jpg',
                postHeader: 'Название пооста4',
                postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque blanditiis consectetur consequatur'
            }
        ],
        newImgText: 'put href image',
        newHeadText: 'put text',
        newPostText: 'put text',
}


const postDataReducer = (state = initialstate, action) => {

    switch (action.type) {

        case  ADD_POST: {
            let newPost = {
                id: 5,
                postImage: state.newImgText,
                postHeader: state.newHeadText,
                postText: state.newPostText
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newImgText: '',
                newHeadText: '',
                newPostText: ''
            };

        }
        case UPDATE_POST_IMG: {
            return {
                ...state,
                newImgText: action.newIText};
        }
        case UPDATE_POST_HEAD: {
            return {
                ...state,
                newHeadText: action.newHText
            };
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };

        }
            default:
                return state;}


    };
export const addPost = (newPost) => ({type : ADD_POST, newPost});

export const updatePostImage = (imageLink) =>
    ({type: UPDATE_POST_IMG, newIText: imageLink});

export const updatePostHead = (textHead) => ({type: UPDATE_POST_HEAD, newHText: textHead});

export const updatePostText = (textPostText) => ({type: UPDATE_POST_TEXT, newText: textPostText});

export default postDataReducer;