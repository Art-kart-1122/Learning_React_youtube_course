
import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";


class LoginContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(loginThunkCreator(data))
    },
        logout: () => {
            dispatch(logoutThunkCreator)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
