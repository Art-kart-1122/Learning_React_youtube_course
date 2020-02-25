import React from 'react'
import style from './Messages.module.css'

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.info}
        </div>
    );
}


export default Message;