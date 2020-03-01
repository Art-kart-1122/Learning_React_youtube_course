import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsReducer;

    const updateMessage = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return ( <Dialogs updateMessage={updateMessage} addMessage={addMessage}
        messages={state.messages} users={state.users} newMessage={state.newMessage}/>
    );
}

export default DialogsContainer;