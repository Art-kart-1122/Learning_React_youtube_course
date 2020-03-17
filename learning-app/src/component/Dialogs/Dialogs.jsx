import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../FormControls/FormControls";

const Dialogs = (props) => {

    const listUser = props.dialogsPage.users.map(
        (item) => {
           return <UserItem name={item.name} id={item.id}/>
        });

    const messages = props.dialogsPage.messages.map(
        (item) => {
            return <Message info={item.info}/>
        });



    const addMessage = (text) => {
        props.addMessage(text.newMessage);
    }

    return (
        <div className={style.wrap}>
            <div className={style.listUser}>
                {listUser}
            </div>
            <div className={style.textMessages}>
                {messages}
                <DialogsAddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
}

const maxLength20 = maxLengthCreator(20);

const DialogsAddMessageForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newMessage"} placeholder={"Message"} validate={[required, maxLength20]}/>
        <button>Submit</button>
    </form>

}

const DialogsAddMessageReduxForm = reduxForm({
    form: "dialogsAddMessage"
})(DialogsAddMessageForm)

export default Dialogs;