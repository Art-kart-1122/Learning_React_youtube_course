import React from "react";
import Header from "./Header";
import {getMyUserDataThunkCreator, setUserDataActionCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import * as axios from 'axios'



class HeaderContainer extends React.Component {

    componentDidMount() {
        let pass = 'yes'; // dump data for backend
        this.props.getMyUserData(pass);
        /*axios.get(`/userData/me?pass=yes`).then(response => {
            this.props.setUserData(response.data);
        })*/

    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        userData: state.authReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       /* setUserData: (userData) => {
            dispatch(setUserDataActionCreator(userData));
        },*/
        getMyUserData: (pass) => {
            dispatch(getMyUserDataThunkCreator(pass));
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)