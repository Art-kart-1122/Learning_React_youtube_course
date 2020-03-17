import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.authReducer
    }
}

export const withAuthRedirect = (Componenet) => {

    class RedirectComponent extends React.Component {
        render() {
            if( !this.props.isAuth.isAuth ) return <Redirect to ='/login' />
            return <Componenet {...this.props}/>
        }
    }
    return connect(mapStateToPropsRedirect)(RedirectComponent)
}