import React from "react";
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={"login"} placeholder={"Login"} validate={[required, maxLength30]}/>
        </div>
        <div>
            <Field component={Input} name={"password"} placeholder={"Password"} validate={[required, maxLength30]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type="checkbox"/>remember me
        </div>
        {props.error && <div className={style.someError}>{props.error}</div> }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    // a unique name for redux-form
    form: "login"
})(LoginForm);

const Login = (props) => {
    let onSubmit =(formData) => {
        props.login(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}



export default Login;