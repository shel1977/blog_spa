import {postDataReducer} from "./postData_reducer";

let store = {
    _state: {
        postPage: {
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

    },
    _callSubscriber() {
        console.log('state changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.postPage = postDataReducer (this._state.postPage, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
