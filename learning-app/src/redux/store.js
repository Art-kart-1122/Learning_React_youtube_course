import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export const store = {
    _state: {
        users: [
            {id: "1", name: "Artur1"},
            {id: "2", name: "Artur2"},
            {id: "3", name: "Artur3"},
            {id: "4", name: "Artur4"},
            {id: "5", name: "Artur5"},
            {id: "6", name: "Artur6"}
        ],
        messages: [
            {info: "Hey React 1"},
            {info: "Hey React 2"},
            {info: "Hey React 3"},
            {info: "Hey React 4"},
            {info: "Hey React 5"},
        ],
        posts: [
            {info: "the 1 post"},
            {info: "the 2 post"}
        ],
        newPost: "Arturka React",
        newMessage: ""
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {},

    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state = profileReducer(action, this._state);
        this._state = dialogsReducer(action, this._state);
        this._callSubscriber(this._state);
    }
}

export const addPostActionCreater = () => ({type: "ADD-POST"})

export const updatePostActionCreator = (text) => ({type: "UPDATE-POST", info: text })

export const updateMessageActionCreator = (text) => ({type: "UPDATE-MESSAGE", info: text})

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"})