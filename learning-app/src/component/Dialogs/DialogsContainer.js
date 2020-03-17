import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);