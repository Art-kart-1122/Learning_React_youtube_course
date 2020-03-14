import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/store";

const Dialogs = (props) => {

    const listUser = props.dialogsPage.users.map(
        (item) => {
           return <UserItem name={item.name} id={item.id}/>
        });

    const messages = props.dialogsPage.messages.map(
        (item) => {
            return <Message info={item.info}/>
        });

    const ref = React.createRef();

    const updateMessage = () => {
        let text = ref.current.value;
        props.updateMessage(text);
    }

    const addMessage = () => {
        props.addMessage();
    }

    return (
        <div className={style.wrap}>
            <div className={style.listUser}>
                {listUser}
            </div>
            <div className={style.textMessages}>
                {messages}
                <input type="text" onChange={updateMessage} ref={ref} value={props.dialogsPage.newMessage}/>
                <input type="submit"onClick={addMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;