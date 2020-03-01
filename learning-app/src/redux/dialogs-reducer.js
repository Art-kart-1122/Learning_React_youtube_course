const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const initialState ={
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
    newMessage: ""
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const msg = {
                info: state.newMessage
            }
            state.messages.push(msg);
            state.newMessage = "";
            return state;
        }
        case UPDATE_MESSAGE: {
            state.newMessage = action.info;
        }
        default: return state;
    }
}

export default dialogsReducer;