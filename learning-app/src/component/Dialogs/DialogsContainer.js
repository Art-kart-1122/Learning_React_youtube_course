import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            dispatch(updateMessageActionCreator(text));
        },

        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;