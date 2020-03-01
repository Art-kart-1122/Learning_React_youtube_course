import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsReducer;

                    const updateMessage = (text) => {
                        store.dispatch(updateMessageActionCreator(text));
                    }

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    return ( <Dialogs updateMessage={updateMessage} addMessage={addMessage}
                                      messages={state.messages} users={state.users} newMessage={state.newMessage}/>
                    );
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;